// @flow

import React, { Component } from 'react';
import { Route, type Match } from 'react-router-dom';
import axios from 'axios';

import Form from '../Form/Form.container';

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
                    console.log(this.state.data.displayName);
                });
        }
    }

    render() {
        return (
            <div className="app">
                <div className="content">
                    <Route path="/:name">
                        {this.state.data &&
                        this.state.data.submitted === false ? (
                            <Form
                                data={this.state.data}
                                name={this.props.match.params.name}
                            />
                        ) : (
                            <div>
                                <h2>Your form has been submitted</h2>
                            </div>
                        )}
                    </Route>

                    {/* <Section noTop>
                        <h2>Location</h2>
                        <p>
                            The ceremony and wedding will all take place at the The Boatshed on the Wellington
                            waterfront.
                        </p>
                        <p>
                            There is no parking on site at the venue, but there should be some free weekend parking
                            spots nearby and around the city (time restrictions may apply).
                        </p>
                        <p>
                            Alternatively the train station is a 10min walk, and with ample bus stops nearby should you
                            wish to arrive and depart via public transport
                        </p>
                    </Section>

                    <Section noTop>
                        <h2>Accommodation</h2>
                        <p>
                            If you wish to instead stay nearby, there are so many place to choose from. The venue is
                            centerally located in Wellington city, with plenty of options to go with. We will update if
                            we can foresee that there are any events on over the weekend, but we say book well in
                            advance to get a good place for a good price.
                        </p>
                    </Section>

                    <Section noTop>
                        <h2>Bridal Party</h2>
                        <div>
                            <p>Mellissa Matthews - Bridesmaid</p>
                            <p>Sally Taylor - Bridesmaid</p>
                        </div>
                        <div>
                            <p>Ben McKeown - Groomsman</p>
                            <p>Matthew Lister - Groomsman</p>
                        </div>
                    </Section> */}
                </div>
            </div>
        );
    }
}

export default Content;
