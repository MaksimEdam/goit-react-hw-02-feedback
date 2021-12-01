import { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
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
        <FeedbackOptions
          good={this.handleIncrementGood}
          neutral={this.handleIncrementNeutral}
          bad={this.handleIncrementBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
