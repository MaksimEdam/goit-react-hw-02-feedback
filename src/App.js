import { Component } from "react";
import Section from "./Section/Section";
import "modern-normalize/modern-normalize.css";
import "./index.css";
//import s from "./FeedBack.module.css";
class App extends Component {
  static defaultProps = {
    initialGoog: 0,
    initialNatural: 0,
    initialBad: 0,
  };
  state = {
    good: this.props.initialGoog,
    neutral: this.props.initialNatural,
    bad: this.props.initialBad,
  };
  handleIncrementGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleIncrementNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleIncrementBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const result = this.state.good + this.state.bad + this.state.neutral;
    return result;
  };
  countPositiveFeedbackPercentage = () => {
    const percentage = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(percentage);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback"></Section>

        <button
          type="button"
          onClick={this.handleIncrementGood}
          /* className={s.button} */
        >
          Good
        </button>
        <button
          type="button"
          onClick={this.handleIncrementNeutral}
          /* className={s.button} */
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={this.handleIncrementBad}
          /* className={s.button} */
        >
          Bad
        </button>
        <section>
          <h2>Statistics</h2>
          <ul>
            <li>
              Good:<span>{this.state.good}</span>
            </li>
            <li>
              Neutral:<span>{this.state.neutral}</span>
            </li>
            <li>
              Bad:<span>{this.state.bad}</span>
            </li>
            <li>
              Total:
              <span>{this.countTotalFeedback()}</span>
            </li>
            <li>
              Positive feedback:
              <span>{this.countPositiveFeedbackPercentage()} %</span>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
