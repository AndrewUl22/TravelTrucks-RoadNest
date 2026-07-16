import type { Review } from "@/types/camper";
import styles from "./CamperReviews.module.css";

interface CamperReviewsProps {
  reviews: Review[];
}

export function CamperReviews({ reviews }: CamperReviewsProps) {
  if (!reviews.length) {
    return (
      <section className={styles.reviews}>
        <h2>Reviews</h2>
        <p>No reviews yet.</p>
      </section>
    );
  }

  return (
    <section className={styles.reviews}>
      <h2>Reviews</h2>

      <ul className={styles.list}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.item}>
            <div className={styles.header}>
              <strong>{review.author}</strong>
              <span>★ {review.rating}</span>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
