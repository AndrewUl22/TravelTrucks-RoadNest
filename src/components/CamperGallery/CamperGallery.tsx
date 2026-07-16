"use client";

import Image from "next/image";
import styles from "./CamperGallery.module.css";
import type { CamperDetails } from "@/types/camper";

type Props = {
  camper: CamperDetails;
};

export function CamperGallery({ camper }: Props) {
  const images = camper.gallery && camper.gallery.length > 0
    ? camper.gallery
    : [camper.image];

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <Image
          src={images[0]}
          alt={camper.name}
          fill
          className={styles.mainImage}
          priority
        />
      </div>

      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.slice(1).map((src) => (
            <div key={src} className={styles.thumb}>
              <Image
                src={src}
                alt={camper.name}
                fill
                className={styles.thumbImage}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
