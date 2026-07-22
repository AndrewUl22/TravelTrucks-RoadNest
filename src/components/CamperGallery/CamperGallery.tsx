"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import type { GalleryImage } from "@/types/camper";
import styles from "./CamperGallery.module.css";

interface CamperGalleryProps {
  gallery: GalleryImage[];
  camperName: string;
}

const CamperGallery = ({ gallery, camperName }: CamperGalleryProps) => {
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!gallery || gallery.length === 0) {
    return null;
  }

  const images = [...gallery].sort((a, b) => a.order - b.order);

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainSwiperWrap}>
        <Swiper
          modules={[Navigation]}
          navigation={images.length > 1}
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className={styles.mainSwiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div className={styles.mainSlide}>
                <Image
                  src={image.original}
                  alt={camperName}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.mainImage}
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {images.length > 1 && (
          <span className={styles.counter}>
            {activeIndex + 1} / {images.length}
          </span>
        )}
      </div>

      <Swiper
        modules={[FreeMode]}
        freeMode
        spaceBetween={12}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 32 },
        }}
        className={styles.thumbsSwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <div
              className={`${styles.thumbSlide} ${
                index === activeIndex ? styles.thumbActive : ""
              }`}
              onClick={() => mainSwiperRef.current?.slideTo(index)}
            >
              <Image
                src={image.thumb}
                alt=""
                fill
                sizes="120px"
                className={styles.thumbImage}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CamperGallery;
