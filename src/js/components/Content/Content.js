// @flow

import React, { Component } from 'react';
import { Route, type Match } from 'react-router-dom';
import axios from 'axios';
import Section from '../Section/Section';
import Form from '../Form/Form.container';

import Accom from './Accom/Accom';
import BridalParty from './BridalParty/BridalParty';
import Gifts from './Gifts/Gifts';
import Location from './Location/Location';
// import Navigation from '../Navigation/Navigation';
import MapContainer from '../Map/MapContainer';
import Summary from '../Summary/Summary';

import './content.css';

type ContentProps = {
    match: Match,
};

type ContentState = {
    data: ?Object,
};

class Content extends Component<ContentProps, ContentState> {
    constructor(props: ContentProps) {
        super(props);
        this.state = {
            data: null,
        };
        (this: any).submitSuccess = this.submitSuccess.bind(this);
    }

    componentDidMount() {
        const { name } = this.props.match.params;
        if (name) {
            axios
                .get(`https://great-aunt-edna-2.firebaseio.com/${name}.json`)
                .then(response => {
                    this.setState({ data: response.data });
                });
        }
    }

    submitSuccess(data: Object) {
        this.setState({ data });
    }

    render() {
        return (
            <div className="app">
                <Route path="/:name">
                    {this.state.data &&
                        (this.state.data.submitted ? (
                            <Summary data={this.state.data} />
                        ) : (
                            <Form
                                data={this.state.data}
                                name={this.props.match.params.name}
                                submitSuccess={this.submitSuccess}
                            />
                        ))}
                </Route>
                <Location />
                <Accom />
                <BridalParty />
                <Gifts />
            </div>
        );
    }
}

export default Content;
