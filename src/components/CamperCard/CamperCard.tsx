import Link from "next/link";
import type { Camper } from "@/types/camper";
import styles from "./CamperCard.module.css";

const formatPrice = (value: number) => `€${value.toFixed(2)}`;

export default function CamperCard({ camper }: { camper: Camper }) {
  const href = `/catalog/${camper.id}`;

  return (
    <li className={styles.card}>
      <Link href={href} className={styles.cardLink}>
        <div className={styles.imageWrap}>
          <img
            src={camper.coverImage}
            alt={camper.name}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.top}>
            <h2 className={styles.title}>{camper.name}</h2>
            <strong className={styles.price}>{formatPrice(camper.price)}</strong>
          </div>

          <div className={styles.meta}>
            <span>
              ★ {camper.rating} ({camper.totalReviews} Reviews)
            </span>
            <span>⌖ {camper.location}</span>
          </div>

          <p className={styles.description}>{camper.description}</p>

          <div className={styles.chips}>
            <span>{camper.engine}</span>
            <span>{camper.transmission}</span>
            <span>{camper.form}</span>
          </div>

          <span className={styles.more}>Show more</span>
        </div>
      </Link>
    </li>
  );
}
