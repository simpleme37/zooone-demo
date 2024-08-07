import { useState } from "react";
import Head from "next/head";
import styles from "../styles/level.module.css";
import Image from "next/image";
import Button from "../components/button";
import Link from "next/link";
import levels from "../data/levels";
import { useRouter } from "next/router";
import BackButton from "../components/btn-back";

export default function Level({ level }) {
  const router = useRouter();
  const levelData = levels[level];
  const [answer, setAnswer] = useState("");
  const [failModal, setFailModal] = useState(false);

  const handleCheckAnswer = () => {
    // console.log(levelData.answer);
    if (answer.trim() === levelData.answer) {
      // 如果答案正確，解鎖
      const savedLevels = JSON.parse(localStorage.getItem("levels")) || {};
      savedLevels[level].isLocked = false;
      localStorage.setItem("levels", JSON.stringify(savedLevels));
      // 並且跳轉回main
      router.push("/main");
    } else {
      // 如果答案錯誤，跳出錯誤Modal
      alert("答案錯誤");
      setFailModal(true);
    }
  };

  return (
    <>
      <BackButton />
      <div className={styles.container}>
        <div className={styles.hint_container}>
          <Link href={`/hint/${levelData.stage}-1`}>
            <span className={styles.hint}>提示一</span>
          </Link>
          <Link href={`/hint/${levelData.stage}-2`}>
            <span className={styles.hint}>提示二</span>
          </Link>
          <Link href={`/hint/${levelData.stage}-3`}>
            <span className={styles.hint}>提示三</span>
          </Link>
        </div>
        <div className={styles.card}>
          {/* 主要內容 */}
          <div className={styles.content}>
            <div className={styles.bg_circle}>
              <Image
                src={levelData.backgroundImage}
                width={50}
                height={50}
                alt="image_animal"
              ></Image>
            </div>
            <p className={styles.card_title}>{levelData.name}</p>
            <div className={styles.card_main_container}>
              看來要先把中藥舖動物製的中藥材下架抹除，才能找出吸引小山走出迷宮的方式了。
              <div className={styles.guide}>先去找找中藥舖的看板在哪裡吧！</div>
            </div>
          </div>
          {/* 輸入框 */}
          <div className={styles.input_btn_wrapper}>
            <input
              type="text"
              id="answer"
              name="answer"
              value={answer}
              placeholder="請在此輸入答案"
              // 獲取 input 值
              onChange={(e) => setAnswer(e.target.value)}
            />
            <Button onClick={handleCheckAnswer}>GO!</Button>
          </div>
          {/* 錯誤彈窗 */}
          {failModal && (
            <div className={styles.fail_modal}>
              <div className={styles.fail_modal_content}>
                <p>答案錯誤，請再試一次！</p>
                <button onClick={() => setFailModal(false)}>關閉</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
