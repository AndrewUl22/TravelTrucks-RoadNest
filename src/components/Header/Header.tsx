"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Catalog" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span>Road</span>Nest
        </Link>

        <nav className={`${styles.navigation} ${open ? styles.open : ""}`}>
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className={`${styles.menuBtn} ${open ? styles.menuOpen : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
