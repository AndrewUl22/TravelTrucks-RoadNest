import type { CamperDetails } from "@/types/camper";
import styles from "./CamperGallery.module.css";

interface CamperGalleryProps {
  camper: CamperDetails;
}

export function CamperGallery({ camper }: CamperGalleryProps) {
  const images = camper.gallery ?? [];

  if (!images.length) {
    return null;
  }

  const [main, ...rest] = images;

  return (
    <section className={styles.gallery}>
      <div className={styles.main}>
        <img src={main} alt={camper.name} />
      </div>

      {rest.length > 0 && (
        <div className={styles.thumbs}>
          {rest.map((src) => (
            <button
              key={src}
              type="button"
              className={styles.thumb}
              onClick={() => {}}
            >
              <img src={src} alt={camper.name} />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
