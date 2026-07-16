import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Make every road feel like home
          </h1>

          <span className={styles.heroSub}>
            Choose a comfortable camper and start a journey worth remembering.
          </span>

          <Link className={styles.heroBtn} href="/catalog">
            Find a camper
          </Link>
        </div>
      </section>

      <section className={styles.adventure}>
        <h2 className={styles.adventureTitle}>YOUR NEXT ADVENTURE</h2>
        <p className={styles.adventureSub}>A simple way to find your camper</p>

        <div className={styles.steps}>
          <Link href="/catalog" className={styles.step}>
            <b className={styles.stepNumber}>01</b>
            <h3 className={styles.stepTitle}>Browse</h3>
            <span className={styles.stepText}>
              Discover campers for every kind of trip.
            </span>
          </Link>

          <Link href="/catalog" className={styles.step}>
            <b className={styles.stepNumber}>02</b>
            <h3 className={styles.stepTitle}>Compare</h3>
            <span className={styles.stepText}>
              Use filters to choose what matters to you.
            </span>
          </Link>

          <Link href="/catalog" className={styles.step}>
            <b className={styles.stepNumber}>03</b>
            <h3 className={styles.stepTitle}>Book</h3>
            <span className={styles.stepText}>
              Send a booking request in a few clicks.
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
