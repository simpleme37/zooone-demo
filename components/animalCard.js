import { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AnimalCard({ animal, level }) {
  const router = useRouter();
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    setIsLocked(animal.isLocked);
  }, [animal]);

  const handleClick = () => {
    // 如果 isLocked 就去破關
    if (isLocked) {
      router.push(`/${level}`);
    } else {
      // 如果 !isLocked 就去相機
      router.push(`/camera${level}`);
    }
  };

  return (
    <>
      <div
        className={styles.animal_card}
        style={{ backgroundImage: `url(${animal.backgroundImage})` }}
        onClick={handleClick}
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
