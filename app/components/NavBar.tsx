import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "white",
        padding: "16px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Link href="/" style={{ marginRight: 16 }}>Home</Link>
      <Link href="/projects" style={{ marginRight: 16 }}>Projects</Link>
      <Link href="/about" style={{ marginRight: 16 }}>About</Link>
      <Link href="/resume">Resume</Link>
    </nav>
  );
}
