import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function PrimaryButton({
  href,
  children,
  variant = "primary",
}: PrimaryButtonProps) {
  const baseClass =
    "inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#262626]";

  const variantClass =
    variant === "primary"
      ? "darrow-button-primary focus:ring-[#12A646]"
      : "darrow-button-secondary focus:ring-[#12A646]";

  return (
    <Link href={href} className={`${baseClass} ${variantClass}`}>
      {children}
    </Link>
  );
}
