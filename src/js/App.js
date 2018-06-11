import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import '../../src/App.css';

export default function() {
    return (
        <div className="app">
            <Header />
            <Route path="/guest/:name?" component={Content} />
            <Route path="/foobar" component={Dashboard} />
            <Footer />
        </div>
    );
}
