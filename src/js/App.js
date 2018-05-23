import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Content from './components/Content/Content';

import '../../src/App.css';

export default function() {
    return (
        <div className="app">
            <Header />
            <Route path="/:name?" component={Content} />
        </div>
    );
}
