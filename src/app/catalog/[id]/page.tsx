import Link from "next/link";
import { notFound } from "next/navigation";

import { BookingForm } from "@/components/BookingForm/BookingForm";
import { CamperGallery } from "@/components/CamperGallery/CamperGallery";
import { VehicleDetails } from "@/components/VehicleDetails/VehicleDetails";
import { CamperReviews } from "@/components/CamperReviews/CamperReviews";

import { getCamperById, getCamperReviews } from "@/services/campers";
import type { CamperDetails, Review } from "@/types/camper";

import styles from "./page.module.css";

export default async function CamperPage({ params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // основной запрос
    const camper: CamperDetails = await getCamperById(id);

    // отзывы — отдельный запрос
    const reviews: Review[] = await getCamperReviews(id);

    return (
      <section className={styles.details}>
        <Link className={styles.backLink} href="/catalog">
          ← Back to catalog
        </Link>

        <div className={styles.titleBlock}>
          <div>
            <h1 className={styles.title}>{camper.name}</h1>

            <div className={styles.meta}>
              <span>
                ★ {camper.rating} ({reviews.length} Reviews)
              </span>
              <span>⌖ {camper.location}</span>
            </div>
          </div>

          <strong className={styles.price}>€{camper.price.toFixed(2)}</strong>
        </div>

        <CamperGallery camper={camper} />

        <div className={styles.body}>
          <div className={styles.left}>
            <p className={styles.description}>{camper.description}</p>
            <VehicleDetails camper={camper} />
          </div>

          <div className={styles.right}>
            <BookingForm camperId={camper.id} />
          </div>
        </div>

        <CamperReviews reviews={reviews} />
      </section>
    );
  } catch {
    notFound();
  }
}
