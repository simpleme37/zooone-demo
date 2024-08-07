import Hint from "../../components/hint";
import levels from "../../data/levels";

const levelData = levels.level1;
const hintData = levelData.questions[0];

export default function Hint1_1() {
  return (
    <Hint
      title={`提示一`}
      question={hintData.question}
      hintContent={hintData.hint}
    />
  );
}
