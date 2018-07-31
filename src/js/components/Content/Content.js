import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { Route } from 'react-router-dom';

import GUEST_LIST from '../../utils/var';
import Form from '../Form/Form.container';
import Details from './Details/Details';
import Schedule from './Schedule/Schedule';
import Location from './Location/Location';
import Landing from './Landing/Landing';
import Summary from '../Summary/Summary';
import Header from '../Header/Header';

import './content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loaded: false,
        };
        this.submitSuccess = this.submitSuccess.bind(this);
        this.resetLoadHandler = this.resetLoadHandler.bind(this);
    }

    componentDidMount() {
        const { name } = this.props.match.params;
        if (name) {
            axios.get(`${GUEST_LIST}${name}.json`).then(response => {
                this.setState({ data: response.data });
            });
        }
        setTimeout(() => {
            this.setState({ loaded: true });
        }, 0);
    }

    resetLoadHandler() {
        this.setState({ loaded: false });
        setTimeout(() => {
            this.setState({ loaded: true });
        }, 250);
    }

    submitSuccess(data) {
        this.setState({ data });
    }

    render() {
        const url = this.props.match.url;
        return (
            <div>
                <Header url={url} loaded={this.resetLoadHandler} />
                <div
                    className={classNames('content', {
                        'content--loaded': this.state.loaded,
                        'content--pre-loaded': !this.state.loaded,
                    })}
                >
                    <Route
                        exact
                        path={`${url}`}
                        render={() => <Landing url={url} />}
                    />
                    <Route
                        path={`${url}/schedule`}
                        render={() => <Schedule url={url} />}
                    />
                    <Route
                        path={`${url}/location`}
                        render={() => <Location url={url} />}
                    />
                    <Route
                        path={`${url}/details`}
                        render={() => <Details url={url} />}
                    />
                    {this.state.data &&
                        (this.state.data.submitted ? (
                            <Route
                                path={`${url}/rsvp`}
                                render={() => (
                                    <Summary data={this.state.data} url={url} />
                                )}
                            />
                        ) : (
                            <Route
                                path={`${url}/rsvp`}
                                render={() => (
                                    <Form
                                        data={this.state.data}
                                        name={this.props.match.params.name}
                                        submitSuccess={this.submitSuccess}
                                        url={url}
                                    />
                                )}
                            />
                        ))}
                </div>
            </div>
        );
    }
}

export default Content;
