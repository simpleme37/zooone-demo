import Hint from "../../components/hint";
import levels from "../../data/levelsData";
import { useRouter } from "next/router";

export default function HintPage() {
  const router = useRouter();
  const { hint } = router.query;

  // 獲取 stage 和 hint 參數
  let stage = "";
  let hintIndex = "";
  if (hint) {
    const splitHint = hint.split("-");
    stage = splitHint[0];
    hintIndex = splitHint[1];
  }
  // console.log("stage", stage);
  // console.log("hintIndex", hintIndex);

  // 查找對應的 levelData 和 hintData
  const levelData = levels.find((level) => level.stage === Number(stage));
  const hintData = levelData
    ? levelData.questions[Number(hintIndex) - 1]
    : null;

  // 在 levelData 或 hintData 還未加載時返回 null 或顯示加載指示器
  if (!levelData || !hintData) {
    return <p>加載中...</p>;
  }

  // console.log(levelData);
  // console.log(hintData);

  return (
    <Hint
      title={`提示 ${hintIndex}`}
      question={hintData.question}
      hintContent={hintData.hint}
      stage={stage}
    />
  );
}
