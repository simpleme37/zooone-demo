import { useState } from "react";
import styles from "../styles/home.module.css";
import Image from "next/image";

export default function AnimalCard({ animal }) {
  const [isLocked, setIsLocked] = useState(true);

  const handleUnlock = () => {
    setIsLocked(false);
  };

  return (
    <>
      <div
        className={styles.animal_card}
        style={{ backgroundImage: `url(${animal.backgroundImage})` }}
        onClick={handleUnlock}
      >
        {isLocked && (
          <>
            <div className={styles.lock_overlay}></div>
            <Image
              src="/icon_lock.svg"
              alt="icon_lock"
              width={24}
              height={24}
              className={styles.locked}
            />
          </>
        )}
        <div className={styles.animal_name}>{animal.name}</div>
        <div className={styles.button_camera}>合照</div>
      </div>
    </>
  );
}
