import type { ReactNode } from "react";

export const AUTH_BG = "#F0F4FF";

export const authInputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

type AuthFormCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
};

const AuthFormCard = ({
  title,
  subtitle,
  children,
  footer,
}: AuthFormCardProps) => {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: AUTH_BG }}
    >
      <div className="container-rest">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:p-8">
            <h2 className="text-xl font-bold text-black">{title}</h2>
            <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
            {children}
            {footer}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthFormCard;
