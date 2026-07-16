import type { CamperDetails } from "@/types/camper";
import styles from "./VehicleDetails.module.css";

interface VehicleDetailsProps {
  camper: CamperDetails;
}

export function VehicleDetails({ camper }: VehicleDetailsProps) {
  return (
    <section className={styles.details}>
      <h2 className={styles.heading}>Vehicle details</h2>

      <dl className={styles.list}>
        <div className={styles.row}>
          <dt>Form</dt>
          <dd>{camper.form}</dd>
        </div>

        <div className={styles.row}>
          <dt>Engine</dt>
          <dd>{camper.engine}</dd>
        </div>

        <div className={styles.row}>
          <dt>Transmission</dt>
          <dd>{camper.transmission}</dd>
        </div>

        <div className={styles.row}>
          <dt>Length</dt>
          <dd>{camper.length}</dd>
        </div>

        <div className={styles.row}>
          <dt>Width</dt>
          <dd>{camper.width}</dd>
        </div>

        <div className={styles.row}>
          <dt>Height</dt>
          <dd>{camper.height}</dd>
        </div>

        {camper.tank && (
          <div className={styles.row}>
            <dt>Tank</dt>
            <dd>{camper.tank}</dd>
          </div>
        )}

        {camper.consumption && (
          <div className={styles.row}>
            <dt>Consumption</dt>
            <dd>{camper.consumption}</dd>
          </div>
        )}
      </dl>
    </section>
  );
}
