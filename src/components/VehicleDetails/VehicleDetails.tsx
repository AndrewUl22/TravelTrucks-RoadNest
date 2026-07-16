import type { CamperDetails } from "@/types/camper";
import styles from "./VehicleDetails.module.css";

interface VehicleDetailsProps {
  camper: CamperDetails;
}

export function VehicleDetails({ camper }: VehicleDetailsProps) {
  return (
    <section className={styles.details}>
      <h2>Vehicle details</h2>

      <dl className={styles.list}>
        <div>
          <dt>Form</dt>
          <dd>{camper.form}</dd>
        </div>
        <div>
          <dt>Engine</dt>
          <dd>{camper.engine}</dd>
        </div>
        <div>
          <dt>Transmission</dt>
          <dd>{camper.transmission}</dd>
        </div>
        <div>
          <dt>Length</dt>
          <dd>{camper.length}</dd>
        </div>
        <div>
          <dt>Width</dt>
          <dd>{camper.width}</dd>
        </div>
        <div>
          <dt>Height</dt>
          <dd>{camper.height}</dd>
        </div>
        {camper.tank && (
          <div>
            <dt>Tank</dt>
            <dd>{camper.tank}</dd>
          </div>
        )}
        {camper.consumption && (
          <div>
            <dt>Consumption</dt>
            <dd>{camper.consumption}</dd>
          </div>
        )}
      </dl>
    </section>
  );
}
