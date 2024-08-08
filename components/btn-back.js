import { useRouter } from "next/router";
import styles from "../styles/button.module.css";

export default function BackButton({ to }) {
  const router = useRouter();

  const handleBack = () => {
    router.push(to);
  };

  return (
    <button onClick={handleBack} className={styles.back_button}>
      返回
    </button>
  );
}
