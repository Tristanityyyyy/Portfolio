import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <nav className="flex gap-6 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} className="text-sm font-medium hover:text-zinc-500 transition-colors">
          {label}
        </Link>
      ))}
    </nav>
  );
}
