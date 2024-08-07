import Hint from "../../components/hint";
import levels from "../../data/levels";

const levelData = levels.level3;
const hintData = levelData.questions[1];

export default function Hint3_2() {
  return (
    <Hint
      title={`提示二`}
      question={hintData.question}
      hintContent={hintData.hint}
    />
  );
}
