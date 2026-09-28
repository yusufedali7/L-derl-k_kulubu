// The red heartbeat line from the club logo, used as the site's signature divider.
const SHORT = "M0 12 H30 L36 4 L42 20 L48 1 L54 23 L60 12 H96";
const LONG =
  "M0 20 H120 L128 14 L134 26 L142 20 H170 L180 4 L190 38 L200 0 L210 40 L220 20 H250 L256 12 L262 28 L268 20 H400";

type Props = {
  /** "long" is the wide hero version; "short" sits under section headings. */
  variant?: "short" | "long";
  /** Draw the line in once on page load (hero only). */
  draw?: boolean;
  className?: string;
};

export default function Pulse({ variant = "short", draw, className = "" }: Props) {
  const long = variant === "long";
  return (
    <svg
      aria-hidden
      viewBox={long ? "0 0 400 40" : "0 0 96 24"}
      className={`block text-pulse ${long ? "h-8 w-full max-w-md" : "h-6 w-24"} ${
        draw ? "pulse-draw" : ""
      } ${className}`}
      fill="none"
    >
      <path
        d={long ? LONG : SHORT}
        pathLength={1}
        stroke="currentColor"
        strokeWidth={long ? 2.5 : 2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
