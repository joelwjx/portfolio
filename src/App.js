import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

class App extends React.Component {
    render() {
        return (
            <div>  
                <Router>
                    <Home></Home>
                </Router>
            </div>
        );
    }
}

export default App;