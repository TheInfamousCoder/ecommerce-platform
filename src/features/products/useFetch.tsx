import { useEffect, useState } from "react";

const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  type RetryOptions = {
    retries: number;
    delay: number;
  };

  useEffect(() => {
    const controller = new AbortController();

    const sleep = async (ms: number) => {
      await new Promise((res) => setTimeout(res, ms));
    };

    const fetchData = async (
      url: string,
      options: RetryOptions,
      controller: AbortController,
    ): Promise<void> => {
      const { retries, delay } = options;

      try {
        if (!navigator.onLine) {
          throw new Error("You are offline. Check your internet connection.");
        }
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(
            "Failed to fetch data from API. Please try again later.",
          );
        }
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }
        if (retries > 0 && navigator.onLine) {
          console.log(`Retrying... attempts left: ${retries}`);
          await sleep(delay);
          return await fetchData(
            url,
            {
              retries: retries - 1,
              delay: delay * 2,
            },
            controller,
          );
        }

        setError(
          !navigator.onLine
            ? "You are offline. Check your internet connection."
            : error instanceof Error
              ? error.message
              : "An unknown error occurred",
        );
      }
    };

    const runFetch = async () => {
      setLoading(true);
      await fetchData(url, { retries: 3, delay: 500 }, controller);
      setLoading(false);
    };

    runFetch();
    const fetchWhenOnline = () => {
      console.log("Back online → refetching...");
      runFetch();
    };

    window.addEventListener("online", fetchWhenOnline);

    return () => {
      controller.abort();
      window.removeEventListener("online", fetchWhenOnline);
    };
  }, [url]);

  return {
    products: data,
    loading,
    error,
  };
};

export default useFetch;
