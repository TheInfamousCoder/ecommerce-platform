import { Mail } from "lucide-react";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import ContactInformation from "../components/contact/ContactIntro";
import ContactLocation from "../components/contact/ContactLocation";

const CONTACT_PURP = "#a855f7";
const CONTACT_BG = "#F0F4FF";

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#a855f7] focus:ring-2 focus:ring-[#a855f7]/15";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //form-validation
  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    };

    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name is too short";
    }

    if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name is too short";
    }

    if (phoneDigits.length < 12) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  //form-submission-logic
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    try {
      setIsSubmitting(true);
      console.log(formData);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Section 1: Hero & contact form */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{ backgroundColor: CONTACT_BG }}
      >
        <div className="container-rest">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            {/* Left: contact information */}
            <ContactInformation contactPurp={CONTACT_PURP} />

            {/* Right: form card */}
            <div className="w-full max-w-lg justify-self-center lg:max-w-none lg:justify-self-end">
              <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:p-8">
                <h2 className="text-xl font-bold text-black">Get in Touch</h2>
                <p className="mt-1 text-sm text-gray-500">
                  You can reach us anytime
                </p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="sr-only">
                        First name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="First name"
                        className={inputClass}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.firstName}
                      </p>
                    )}
                    <div>
                      <label htmlFor="last-name" className="sr-only">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        className={inputClass}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  <div>
                    <PhoneInput
                      placeholder="Enter you phone number"
                      inputClassName="w-full !rounded-r-md border !border-gray-200  !h-11  outline-none focus-within:!border-primary z-100"
                      defaultCountry="in"
                      name="phone"
                      value={formData.phone}
                      onChange={(phone) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone,
                        }))
                      }
                      countrySelectorStyleProps={{
                        buttonClassName: `
                        !rounded-l-md
                        !rounded-b-0
                        !px-2
                        !py-3
                        !h-11
                        hover:!bg-neutral-100
                      `,

                        dropdownStyleProps: {
                          className:
                            "bg-white shadow-xl rounded-md border-gray-200 border-primary",
                        },
                      }}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                  )}

                  <div className="relative">
                    <label htmlFor="email" className="sr-only">
                      Your email
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
                      placeholder="Your email"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}

                  <div className="relative">
                    <label htmlFor="message" className="sr-only">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={120}
                      placeholder="How can we help?"
                      value={formData.message}
                      className={`${inputClass} resize-none pb-8`}
                      onChange={handleChange}
                    />
                    <span className="pointer-events-none absolute bottom-3 right-3 text-xs text-gray-400">
                      0/120
                    </span>
                  </div>
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-lg py-3.5 text-sm font-semibold text-white transition hover:opacity-95 cursor-pointer"
                    disabled={isSubmitting}
                    style={{ backgroundColor: CONTACT_PURP }}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>

                  <p className="text-center text-xs leading-relaxed text-gray-500">
                    By contacting us, you agree to our{" "}
                    <a
                      href="#"
                      className="font-semibold text-gray-700 hover:underline"
                    >
                      Terms of service
                    </a>
                    and
                    <a
                      href="#"
                      className="font-semibold text-gray-700 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Map & location */}
      <ContactLocation contactPurp={CONTACT_PURP} />
    </main>
  );
};

export default Contact;
