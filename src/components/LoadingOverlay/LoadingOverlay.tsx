import Spinner from "@/components/Spinner/Spinner";
import styles from "./LoadingOverlay.module.css";

const LoadingOverlay = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.card}>
        <Spinner
          size={72}
          color="#c1663a"
          secondaryColor="rgba(193, 102, 58, 0.35)"
        />
        <p className={styles.title}>Loading tracks...</p>
        <p className={styles.description}>
          Please wait while we fetch the best travel trucks for you.
        </p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
