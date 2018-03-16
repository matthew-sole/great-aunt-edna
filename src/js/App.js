import React, { Component } from 'react';
import '../../src/App.css';

import Form from './components/Form/Form.container';
import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="content content-width">
                    <div className="section gutters">
                        <Form />
                    </div>
                    <div className="section gutters">               
                        <div className="color-palette">
                            <h2>Colors</h2>
                            <div className="color-palette__item">
                                <h4>$color-dusty-blue</h4>
                                <span className="u-color-dusty-blue"></span>
                            </div>
                            <div className="color-palette__item">
                                <h4>$color-dusty-teal</h4>
                                <span className="u-color-dusty-teal"></span>
                            </div>
                            <div className="color-palette__item">
                                <h4>$color-dusty-pink</h4>
                                <span className="u-color-dusty-pink"></span>
                            </div>
                            <div className="color-palette__item">
                                <h4>$color-dusty-peach</h4>
                                <span className="u-color-dusty-peach"></span>
                            </div>
                            <div className="color-palette__item">
                                <h4>$color-dusty-beige</h4>
                                <span className="u-color-dusty-beige"></span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="footer">

                </div>
            </div>
        );
    }
}

export default App;
