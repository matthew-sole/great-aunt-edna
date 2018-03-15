import React, { Component } from 'react';
import '../../src/App.css';
import Form from './components/Form/Form.container';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>Claire &amp; Matt</h1>
                    <p>April 6. 2019 | Wellington, New Zealand</p>
                    <p>X days to go</p>
                </div>
                <div className="content">
                    <Form />
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
                <div className="footer">

                </div>
            </div>
        );
    }
}

export default App;
