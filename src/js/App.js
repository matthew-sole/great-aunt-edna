import React, { Component } from 'react';
import '../../src/App.css';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';


class App extends Component {
    render() {
        return (
            <div className="app">
                {/* <Header /> */}
                <Content />
                {/* <Footer /> */}
            </div>
        );
    }
}

export default App;
