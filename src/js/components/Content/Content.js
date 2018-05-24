// @flow

import React, { Component } from 'react';
import { Route, type Match, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Section from '../Section/Section';
import Form from '../Form/Form.container';
import Footer from '../Footer/Footer';
import Accom from './Accom/Accom';
import BridalParty from './BridalParty/BridalParty';
import Gifts from './Gifts/Gifts';
import Location from './Location/Location';

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

    render() {
        return (
            <div className="app">
                <div className="content">
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/accom">Accom</Link>
                            </li>
                            <li>
                                <Link to="/bridal-party">Bridal Party</Link>
                            </li>
                            <li>
                                <Link to="/location">Location</Link>
                            </li>
                            <li>
                                <Link to="/gifts">Gifts</Link>
                            </li>
                        </ul>
                    </div>
                    <Route path="/:name">
                        {this.state.data && (
                            <Section>
                                {this.state.data.submitted === false ? (
                                    <Form
                                        data={this.state.data}
                                        name={this.props.match.params.name}
                                    />
                                ) : (
                                    <h2>Your Form has been submitted</h2>
                                )}
                            </Section>
                        )}
                    </Route>

                    <Switch>
                        <Route path="/accom" component={Accom} />
                        <Route path="/location" component={Location} />
                        <Route path="/gifts" component={Gifts} />
                        <Route path="/bridal-party" component={BridalParty} />
                    </Switch>

                    <Section>
                        <Footer />
                    </Section>
                </div>
            </div>
        );
    }
}

export default Content;
