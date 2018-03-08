import React, { Component } from 'react';
import '../../src/App.css';
import Form from './components/Form/Form.container';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    {/* <ul className="nav">
                        <li className="nav__item">
                            <a href="#" className="nav__link">What</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">When</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Where</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">rsvp</a>
                        </li>
                    </ul> */}
                </div>
                <div className="content">
                    <Form />
                </div>
                <div className="footer">

                </div>
            </div>
        );
    }
}

export default App;
