import React from "react";
import styles from "../styles/success.module.css";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";

export default function Success({ level }) {
  return (
    <div className={styles.container}>
      <Image
        src={`/img_animal${level}.png`}
        alt="animal"
        width={72}
        height={72}
        className={styles.animal_image}
      ></Image>
      <p className={styles.congrat}>恭喜通關</p>
      <p className={styles.congrat}>Level {level}</p>
      <div className={styles.button_container}>
        <Link href="/main">
          <Button>OK!</Button>
        </Link>
      </div>
    </div>
  );
}
