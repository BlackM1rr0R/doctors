import Link from "next/link";

export default function Logo({ name = "Medika Klinika" }) {
  const [first, ...rest] = name.split(" ");
  return (
    <Link href="/" className="logo" aria-label={name}>
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M8 56V10h14l10 16 10-16h14v12" fill="none" stroke="#f58220" strokeWidth="8" strokeLinejoin="round" />
        <path d="M56 32v24h-10V40l-7 11" fill="none" stroke="#a7a9ac" strokeWidth="8" strokeLinejoin="round" />
        <path d="M2 38h14l4-8 6 16 4-8h8" fill="none" stroke="#f58220" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="logo-text">
        <b>{first.toUpperCase()}</b>
        <span>{rest.join(" ")}</span>
      </span>
    </Link>
  );
}
