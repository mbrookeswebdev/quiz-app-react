import React, {Component} from 'react';
import Question from "./Question";
import './Styles.css';
import Instructions from "./Instructions";
import {connect} from "react-redux";

/**
 * Game Component
 *
 * Displays Question component if the game started or the Instructions component if the game not started.
 */

class Game extends Component {
    render() {
        let displayComponent;
        this.props.gameStarted ? displayComponent = <Question/> : displayComponent = <Instructions/>;

        return (
            <div className="main">
                {displayComponent}
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

export default connect(mapStateToProps, mapDispatchToProps)(Game);
