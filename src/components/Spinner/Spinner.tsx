"use client";

import styles from "./Spinner.module.css";

export default function Spinner({
  size = 24,
  color = "#829b91",
  secondaryColor = "rgba(130, 155, 145, 0.4)",
}: {
  size?: number;
  color?: string;
  secondaryColor?: string;
}) {
  return (
    <span
      className={styles.spinner}
      style={{
        width: size,
        height: size,
        borderColor: secondaryColor,
        borderTopColor: color,
      }}
    />
  );
}
