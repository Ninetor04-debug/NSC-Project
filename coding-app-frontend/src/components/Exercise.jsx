import { useParams } from "react-router-dom";
import { lessons } from "../data/lessonsData";
import QuizChoice from "../components/QuizChoice";

function Exercise() {

  const { lessonId, exerciseId } = useParams();

  const lesson = lessons.find(
    (item) => item.id === Number(lessonId)
  );

  const exercise = lesson?.exercises.find(
    (item) => item.id === Number(exerciseId)
  );


  if (!exercise) {
    return <h2>ไม่พบแบบฝึกหัด</h2>;
  }


  return (
    <QuizChoice
      question={exercise.question}
      options={exercise.options}
      answer={exercise.answer}
      onNext={(result)=>{
        console.log(result);
      }}
    />
  );
}


export default Exercise;