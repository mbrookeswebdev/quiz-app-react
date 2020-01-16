import React, {Component} from 'react';
import {Button} from "primereact/button";
import {connect} from "react-redux";

/**
 * Instructions Component
 *
 * Displays game rules and the Start the Game button.
 */

class Instructions extends Component {
    render() {
        return (
            <div className="main2">
                <h1>Welcome to the general knowledge Quiz</h1>
                <h2>How to play:</h2>
                <h3>You will be presented with 10 questions and a choice of 3 answers for each question.</h3>
                <h3>You have 10 seconds to pick a correct answer.</h3>
                <Button className="button" label="Start the Game" onClick={this.props.startGame}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameStarted: state.gameStarted
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => {
            dispatch({type: 'START_GAME'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);