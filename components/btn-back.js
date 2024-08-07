import { useRouter } from "next/router";
import styles from "../styles/button.module.css";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    // router.back();
    router.push("/main");
  };

  return (
    <button onClick={handleBack} className={styles.back_button}>
      返回
    </button>
  );
}
