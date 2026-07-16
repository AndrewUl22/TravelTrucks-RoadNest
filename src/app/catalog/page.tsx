import { CatalogClient } from "@/components/CatalogClient/CatalogClient";
import styles from "./page.module.css";

export default function CatalogPage() {
  return (
    <section className={styles.catalogPage}>
      <CatalogClient />
    </section>
  );
}
