import React, { Component } from "react";
import { Slide, Title, Text } from "@sambego/diorama";

import Percent from "./PercentageAnswers";

import Realtime from "../utils/Ably";
import slide from "../utils/SlideState";
import global from "../utils/global";

export default class QuizSlide extends Component {
  timer;

  constructor(props) {
    super(props);

    let state = {
      quiz: this.props.quiz,
      answers: {
      },
      countdown: this.props.countdown
    };

    this.state = state;
    Realtime.publishNewQuestion(state.quiz);

    this.handleIncomingAnswers = this.handleIncomingAnswers.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  componentWillMount() {
    Realtime.subscribeToAnswers(this.handleIncomingAnswers);
    this.decreaseCounter();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    Realtime.unsubscribeFromAnswers(this.handleIncomingAnswers);
  }

  decreaseCounter() {
    this.setState({countdown: this.state.countdown - 1});
    if (this.state.countdown <= 0) {
      // Find the highest choice
      let max = 0;
      let highestKey = 0;
      Object.keys(this.state.answers).map(key => {
        if (this.state.answers[key] > max) {
          max = this.state.answers[key];
          highestKey = key;
        }
        return key;
      });
      highestKey = parseInt(highestKey);
      let matchingChoice = this.state.quiz.choices.find(c => c.value === highestKey);
      if (!matchingChoice) matchingChoice = this.state.quiz.choices[0];
      if (matchingChoice.globalProp) {
        global.setGlobalProp(matchingChoice.globalProp.prop, matchingChoice.globalProp.val);
      }
      slide.gotoSlide(matchingChoice.moveToSlide);

    } else {
      this.timer = setTimeout(this.decreaseCounter, 1000);
    }
  }

  handleIncomingAnswers(data) {
    let answers = Object.assign({}, this.state.answers);
    answers[data.value] = (answers[data.value] + 1) || 1;
    this.setState({answers});
  }

  render() {
    let totalAnswers = Object.keys(this.state.answers).reduce((a, b) => {
      return a + this.state.answers[b];
    }, 0);
    return (
      <Slide>
        <Title>{this.state.quiz.question}</Title>
        <div style={{textAlign: "left"}}>
          {this.state.quiz.choices.map((a, index) => {
            return <Text key={index}>{index + 1}. {a.text} <Percent answers={this.state.answers[a.value]} total={totalAnswers}/></Text>
          })}
        </div>
        <Title>{this.state.countdown}</Title>
      </Slide>
    )
  }
}