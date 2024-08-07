import Hint from "../../components/hint";
import levels from "../../data/levels";

const levelData = levels.level2;
const hintData = levelData.questions[1];

export default function Hint2_2() {
  return (
    <Hint
      title={`提示二`}
      question={hintData.question}
      hintContent={hintData.hint}
    />
  );
}
