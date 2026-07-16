"use client";

import { useEffect, useState } from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
}
