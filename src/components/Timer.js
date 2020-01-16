import React, {Component} from 'react';
import {connect} from 'react-redux';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 10
        };
        this.tick = this.tick.bind(this);
        this.stopTimer = this.tick.bind(this);
    }

    componentDidMount() {
        if (this.props.gameStarted) {
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    stopTimer() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.props.gameEnded !== true) {
            this.setState((state) => ({
                counter: state.counter - 1
            }));
            if (this.state.counter === 0 || this.props.answerSelected === true) {
                let resetValue = 10;
                this.setState({counter: resetValue});
                this.props.setQuestionNumber();
                this.props.setAnswerSelected(false);
            }
        }
    }

    render() {
        return (
            <div>
                <h2>Time remaining: {this.state.counter} seconds</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        answerSelected: state.answerSelected,
        questionNumber: state.questionNumber,
        gameStarted: state.gameStarted
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setQuestionNumber: () => {
            dispatch({type: 'SET_QUESTION_NUMBER'})
        },
        setAnswerSelected: (value) => {
            dispatch({type: 'SET_ANSWER_SELECTED', value: value})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);