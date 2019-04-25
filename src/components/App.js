import React, {Component} from 'react';
import Menu from "./Menu";
import Header from "./Header";
import Rooms from './Rooms';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Message from "./Message";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className='main-container'>
                    <Header/>
                    <div className='content-container'>
                        <Menu/>
                        <div className="dynamic-container">
                            <Route exact path='/messages/' component={Rooms}/>
                            <Route path={`/messages/:roomId`} component={Message}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;