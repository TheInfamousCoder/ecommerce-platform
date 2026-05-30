import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthFormCard, { authInputClass } from "../components/auth/AuthFormCard";
import PageBanner from "../components/PageBanner";
import type { User } from "../types/user";
import useAuth from "../hooks/useAuth";

type StoredUser = User & { password: string };

const getStoredUser = (): StoredUser[] => {
  const stored = localStorage.getItem("users");
  if (!stored) return [];
  return JSON.parse(stored);
};

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  //handling-form-inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  //validating-forms
  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
    };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const users = getStoredUser();

      const user = users.find(
        (user) =>
          user.email === formData.email.toLowerCase() &&
          user.password === formData.password,
      );

      if (!user) {
        setErrors({
          email: "",
          password: "Email or password you entered is invalid",
        });

        return;
      }

      console.log(`Logged in user:${user}`);

      login({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
      setSubmitStatus("success");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      navigate("/");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <PageBanner>
        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Login
        </h1>
      </PageBanner>

      <AuthFormCard
        title="Welcome Back"
        subtitle="Sign in to your FillCart account"
        footer={
          <p className="mt-6 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-primary hover:underline"
            >
              Register
            </Link>
          </p>
        }
      >
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Mail
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden
            />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`${authInputClass} pl-10`}
              autoComplete="email"
            />
          </div>

          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}

          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <Lock
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden
            />
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`${authInputClass} pl-10`}
              autoComplete="current-password"
            />
          </div>

          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}

          {submitStatus === "success" && (
            <p className="text-center text-sm text-success">
              Logged In successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-center text-sm text-red-500">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-primary py-3.5 text-sm font-semibold text-white transition hover:opacity-95"
          >
            {isSubmitting ? "Loggin In..." : "Login"}
          </button>
        </form>
      </AuthFormCard>
    </main>
  );
};

export default Login;
