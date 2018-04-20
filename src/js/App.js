import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import '../../src/App.css';

export default function() {
    return (
        <div className="app">
            <Header />
            <Route path="/:name?" component={Content} />
            <Footer />
        </div>
    );
}
