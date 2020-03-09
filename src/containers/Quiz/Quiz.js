import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "Якого кольору небо?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "Зеленого", id: 1 },
          { text: "Блакитного", id: 2 },
          { text: "Червоного", id: 3 },
          { text: "Чорного", id: 4 }
        ]
      },
      {
        question: "Дата народження Тараса Шевченка?",
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: "10 березня 1914 року", id: 1 },
          { text: "9 березня 1810 року", id: 2 },
          { text: "9 березня 1814 року", id: 3 },
          { text: "10 березня 1814 року", id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    this.setState({
      answerState: { [answerId]: "success" }
    });

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("Finished");
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: { [answerId]: "error" }
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Дайте відповіді на питання:</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
