import React, {Component} from 'react';
import questions from './data/questions.js';
import uuid from 'react-uuid';
import {connect} from 'react-redux';
import End from './End'
import Timer from "./Timer";

/**
 * Question Component
 *
 * Loads questions from questions.js, displays Timer Component and updates score.
 */

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: questions,
            score: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(correctAnswer) {
        if (correctAnswer === true) {
            this.props.setAnswerSelected(true);
            this.setState((state) => ({
                score: state.score + 1
            }));
        } else {
            this.props.setAnswerSelected(true);
        }
    }

    render() {
        if (this.props.questionNumber === (questions.length)) {
            this.props.stopGame();
            return <End score={this.state.score}/>
        }
        return (
            <div>
                <Timer/>
                <h3>Question no {questions[this.props.questionNumber].id}:</h3>
                <h3 style={{color: "brown"}}>{questions[this.props.questionNumber].question}</h3>
                <h3>Answers: </h3>
                {questions[this.props.questionNumber].answers.map((answer) =>
                    <div key={uuid()} onClick={() => this.handleClick(answer.correct)}>
                        <h3 className="answer">{answer.text}</h3></div>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        answerSelected: state.answerSelected,
        questionNumber: state.questionNumber,
        gameEnded: state.gameEnded
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAnswerSelected: (value) => {
            dispatch({type: 'SET_ANSWER_SELECTED', value: value})
        },
        setQuestionNumber: () => {
            dispatch({type: 'SET_QUESTION_NUMBER'})
        },
        stopGame: () => {
            dispatch({type: 'STOP_GAME'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);