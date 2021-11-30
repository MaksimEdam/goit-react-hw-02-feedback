import { Component } from "react";
import s from "./FeedBack.module.css";
class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button className={s.button}>Good</button>
        <button className={s.button}>Neutral</button>
        <button className={s.button}>Bad</button>
        <section>
          <h2>Statistics</h2>
          <ul>
            <li>Good:0</li>
            <li>Neutral:0</li>
            <li>Bad:0</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default FeedBack;
