import { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";
import "modern-normalize/modern-normalize.css";
import "./index.css";

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
  onLeaveFeedback = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
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
    const total = this.countTotalFeedback();
    const objKey = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions
          options={objKey}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default App;
