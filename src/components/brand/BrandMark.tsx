import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
  className?: string;
};

export function BrandMark({ compact = false, className = "" }: BrandMarkProps) {
  if (compact) {
    return (
      <Image
        src="/brand/darrow-icon.png"
        alt="DARROW"
        width={42}
        height={42}
        className={`h-10 w-10 object-contain ${className}`}
        priority
      />
    );
  }

  return (
    <Image
  src="/brand/darrow-logo-footer.png"
  alt="DARROW"
  width={200}
  height={44}
  priority
  className="h-auto w-30 sm:w-33.75 lg:w-37.5"
/>
  );
}
