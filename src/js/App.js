import React from 'react';
import { Route } from 'react-router-dom';

import Landing from './components/Content/Landing/Landing';
import Content from './components/Content/Content';
import Dashboard from './components/Dashboard/Dashboard';
import '../../src/App.css';

export default function() {
    return (
        <div className="app">
            <Route exact path="/" component={Landing} />
            <Route path="/foobar" component={Dashboard} />
            <Route path="/guests/:name?" component={Content} />
        </div>
    );
}
