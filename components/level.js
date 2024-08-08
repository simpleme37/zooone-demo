import { useState } from "react";
import styles from "../styles/level.module.css";
import Image from "next/image";
import Button from "../components/button";
import Link from "next/link";
import levels from "../data/levelsData";
import { useRouter } from "next/router";
import BackButton from "../components/btn-back";
import FailModal from "./modal-fail";

export default function Level({ level }) {
  const router = useRouter();
  const levelData = levels[level - 1];
  const [answer, setAnswer] = useState("");
  const [failModal, setFailModal] = useState(false);

  // console.log(levelData);
  // console.log(levelData.answer);

  const handleCheckAnswer = () => {
    if (answer.trim() === levelData.answer) {
      // 如果答案正確，解鎖
      const savedLevels = JSON.parse(localStorage.getItem("levels")) || {};
      // 初始化 savedLevels[level] 如果它不存在
      if (!savedLevels[level]) {
        savedLevels[level] = {};
      }
      // 將該等級 isLocked屬性設成 false
      savedLevels[level].isLocked = false;
      localStorage.setItem("levels", JSON.stringify(savedLevels));
      // 並且跳轉到 success 頁面
      router.push(`/success/${level}`);
    } else {
      // 如果答案錯誤，跳出錯誤Modal
      setFailModal(true);
    }
  };

  return (
    <>
      <BackButton to="/main" />
      <div className={styles.container}>
        <div className={styles.hint_container}>
          <Link href={`/hint/${level}-1`}>
            <span className={styles.hint}>提示一</span>
          </Link>
          <Link href={`/hint/${level}-2`}>
            <span className={styles.hint}>提示二</span>
          </Link>
          <Link href={`/hint/${level}-3`}>
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
              {levelData.guide}
              <div className={styles.guide}>
                <Image
                  src="/icon_bulb.svg"
                  alt="bulb"
                  width={40}
                  height={40}
                  className={styles.bulb}
                ></Image>
                <p>{levelData.guide_sm}</p>
              </div>
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
        </div>
        {/* 錯誤彈窗 */}
        {failModal && <FailModal onClose={() => setFailModal(false)} />}
      </div>
    </>
  );
}
