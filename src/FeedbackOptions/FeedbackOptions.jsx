import s from "./FeedBack.module.css";

function FeedbackOptions({ good, neutral, bad }) {
  return (
    <>
      <button type="button" onClick={good} className={s.button}>
        Good
      </button>
      <button type="button" onClick={neutral} className={s.button}>
        Neutral
      </button>
      <button type="button" onClick={bad} className={s.button}>
        Bad
      </button>
    </>
  );
}

export default FeedbackOptions;
