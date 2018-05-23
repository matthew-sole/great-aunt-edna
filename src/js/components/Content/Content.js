// @flow

import React, { Component } from 'react';
import { Route, type Match } from 'react-router-dom';
import axios from 'axios';
import Section from '../Section/Section';
import Form from '../Form/Form.container';
import Footer from '../Footer/Footer';
import MapContainer from '../Map/MapContainer';
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

                    <Section noTop>
                        <h2>Location</h2>
                        <MapContainer />
                        <p>
                            Both Ceremony and Reception will take place at the{` `}
                            <a
                                href="http://www.theboatshedvenue.co.nz/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                The Boatshed
                            </a>
                            {` `}
                            on the Wellington waterfront.
                        </p>
                        <p>
                            Please note that there is no on site parking at the
                            venue. If you are driving, there is plenty of
                            parking available around the city. This{' '}
                            <a
                                href="https://www.myguidewellington.com/usefulinfo/wellington-parking"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                handy guide
                            </a>{' '}
                            might be helpful in order to find the best place to
                            leave you car on the day and/or the evening.
                        </p>
                        <h3>Public Transport</h3>
                        <p>
                            There is plenty of public transport to the venue no
                            matter where you might be staying in the Wellington
                            area. There are lots of bus stops, and the main
                            Wellington railway station is a 10-15min walk away.
                        </p>
                        <p>
                            All public transport can be found at{' '}
                            <a
                                href="https://www.metlink.org.nz/#plan"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Metlink
                            </a>{' '}
                            , and they have a helpful{' '}
                            <a
                                href="https://www.metlink.org.nz/#plan"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                online tool
                            </a>{' '}
                            to help plan your public transport to and from the
                            greater Wellington region
                        </p>
                    </Section>

                    <Section noTop>
                        <h2>Accommodation</h2>
                        <p>
                            If you wish to instead stay nearby, there are so
                            many place to choose from. The venue is centerally
                            located in Wellington city, with plenty of options
                            to go with. We will update if we can foresee that
                            there are any events on over the weekend, but we say
                            book well in advance to get a good place for a good
                            price.
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
                    </Section>
                    <Section>
                        <Footer />
                    </Section>
                </div>
            </div>
        );
    }
}

export default Content;
