import React from "react";
import styles from "../styles/fail_modal.module.css";
import Button from "./button";
import Image from "next/image";

export default function FailModal({ onClose }) {
  // 點擊再試一次，關閉失敗彈窗
  const handleTryAgain = () => {
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Image
          src="/img_animal1.png"
          width={70}
          height={70}
          alt="animal"
        ></Image>
        <div className={styles.guide_text}>
          <span>這個答案不對哦!</span>
          <span className={styles.sm_text}>（答案需文字完全相同）</span>
        </div>
        <Button onClick={handleTryAgain}>再試一次</Button>
      </div>
    </div>
  );
}
