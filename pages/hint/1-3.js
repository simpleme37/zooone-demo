import Hint from "../../components/hint";
import levels from "../../data/levels";

const levelData = levels.level1;
const hintData = levelData.questions[2];

export default function Hint1_3() {
  return (
    <Hint
      title={`提示三`}
      question={hintData.question}
      hintContent={hintData.hint}
    />
  );
}
