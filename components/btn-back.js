import { useRouter } from "next/router";
import styles from "../styles/back_button.module.css";

export default function BackButton({ to }) {
  const router = useRouter();

  const handleTo = () => {
    router.push(to);
  };

  return (
    <button onClick={handleTo} className={styles.back_button}>
      返回
    </button>
  );
}
