import React, {Component} from 'react';
import {Button} from "primereact/button";
import {connect} from "react-redux";

/**
 * End Component
 *
 * Displays the final score at the end of the game and the Restart the Game button.
 */

class End extends Component {
    render() {
        return (
            <div>
                <h2>Thank you for playing!</h2>
                <h3>Your score is {this.props.score}</h3>
                <Button className="button" label="Play Again" onClick={this.props.restartGame}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameStarted: state.gameStarted,
        gameEnded: state.gameEnded
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        restartGame: () => {
            dispatch({type: 'RESTART_GAME'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(End);