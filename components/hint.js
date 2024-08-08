import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/hint.module.css";
import Button from "./button";
import Link from "next/link";

export default function Hint({ title, question, hintContent, stage }) {
  const router = useRouter();

  const [showHint, setShowHint] = useState(false);

  // 按下 YES
  const handleShowHint = () => {
    setShowHint(true);
  };

  // 按下 NO
  const handleBack = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <p className={styles.question}>{question}</p>
      {!showHint ? (
        <div className={styles.confirm_container}>
          <p className={styles.confirm}>確定要查看提示嗎?</p>
          <div className={styles.button_wrapper}>
            <button className={styles.button} onClick={handleShowHint}>
              YES
            </button>
            <button className={styles.button} onClick={handleBack}>
              NO
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.hint_container}>
            {hintContent}
            <div className={styles.button_container}>
              <Link href={`/stage/${stage}`}>
                <Button>OK!</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
