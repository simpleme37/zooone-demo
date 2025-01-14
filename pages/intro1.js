import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.css";
import Button from "../components/button";

export default function Intro2() {
  return (
    <>
      <Head>
        <title>Intro1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.subtitle}>遊戲說明</div>
        <ul className={styles.list}>
          <li>本遊戲需搭配遊戲道具紙進行，請先下載解謎遊戲道具紙。</li>
          <li>
            遊戲共有四道關卡分佈在動物園各展區中，每個關卡會解出一個正確謎底。
          </li>
          <li>
            解謎的線索會在手機網頁、現場景物、展區看板、遊戲道具紙上。卡關時，可使用手機網頁上的提示。
          </li>
          <li>個展區關卡謎底解開後，將答案輸入各關卡答案欄位。</li>
        </ul>
        <div className={styles.button_container}>
          <Link href="/intro2">
            <Button>OK!</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
