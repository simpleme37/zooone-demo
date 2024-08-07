import Link from "next/link";
import styles from "../styles/home.module.css";

export default function Button({ href, onClick, children }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    </Link>
  );
}
