import React, {Component} from 'react';
import Game from "./components/Game";

/**
 * App Component
 *
 * Loads the Game Component.
 */

class App extends Component {

    render() {
        return (
            <div>
                <Game/>
            </div>
        );
    }
}

export default App;
