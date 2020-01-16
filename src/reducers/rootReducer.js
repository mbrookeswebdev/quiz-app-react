const initState = {
    outOfTime: null,
    answerSelected: null,
    questionNumber: 1,
    gameStarted: null,
    gameEnded: null
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_OUT_OF_TIME':
            let outOfTimeSet = action.value;
            return {
                ...state,
                outOfTime: outOfTimeSet
            };
        case'SET_ANSWER_SELECTED':
            let answerSelectedSet = action.value;
            return {
                ...state,
                answerSelected: answerSelectedSet
            };

        case 'SET_QUESTION_NUMBER':
            let newNumber = state.questionNumber + 1;
            return {
                ...state,
                questionNumber: newNumber
            };

        case'START_GAME':
            let gameStatusStart = true;
            return {
                ...state,
                gameStarted: gameStatusStart
            };
        case'STOP_GAME':
            let gameStatusEnd = true;
            return {
                ...state,
                gameEnded: gameStatusEnd
            };
        case 'RESTART_GAME':
            let newGameStartedStatus = true;
            let newGameEndedStatus = false;
            let newQuestionNumber = 1;
            return {
                ...state,
                gameStarted: newGameStartedStatus,
                gameEnded: newGameEndedStatus,
                questionNumber: newQuestionNumber
            };
        default:
            return state;
    }
};

export default rootReducer;