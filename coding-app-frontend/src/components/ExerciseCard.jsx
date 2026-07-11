import "./ExerciseCard.css";
import { useNavigate } from "react-router-dom";


function ExerciseCard({
  exercise,
  completed,
  lessonId
}) {

  const navigate = useNavigate();


  return (
    <div 
      className={`card ${completed ? "card--done" : ""}`}
    >

      <div className="card__header">

        <img
          src="/python-logo.svg"
          className="card__icon"
        />


        <div>

          <p className="card__title">
            {exercise.title ?? "แบบฝึกหัดหลังบทเรียน"}
          </p>


          <p className="card__lesson">
            บทที่ : {lessonId}
          </p>

        </div>

      </div>



      <button

        className={
          completed 
          ? "card__button card__button--done"
          : "card__button"
        }

        disabled={completed}


        onClick={() =>
          navigate(`/exercise/${lessonId}/${exercise.id}`)
        }

      >

        {
          completed 
          ? "✓ เสร็จแล้ว"
          : "▶ เริ่มทำ"
        }

      </button>


    </div>
  );
}


export default ExerciseCard;