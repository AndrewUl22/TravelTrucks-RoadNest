"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span>Road</span>Nest
        </Link>

        <nav className={styles.navigation}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/catalog" className={styles.navLink}>Catalog</Link>
        </nav>

        <div className={styles.social}>
          <a href="#" className={styles.socialLink}>Instagram</a>
          <a href="#" className={styles.socialLink}>Facebook</a>
          <a href="#" className={styles.socialLink}>YouTube</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 RoadNest. All rights reserved.</p>
      </div>
    </footer>
  );
}
