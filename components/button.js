import Link from "next/link";
import styles from "../styles/home.module.css";

export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
