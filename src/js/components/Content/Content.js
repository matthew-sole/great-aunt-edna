import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Header from '../Header/Header';
import Form from '../Form/Form.container';
import Details from './Details/Details';
import Schedule from './Schedule/Schedule';
import Location from './Location/Location';
import Landing from './Landing/Landing';
import Summary from '../Summary/Summary';

import './content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
        this.submitSuccess = this.submitSuccess.bind(this);
    }

    componentDidMount() {
        const { name } = this.props.match.params;
        if (name) {
            axios
                .get(
                    `https://great-aunt-edna-2.firebaseio.com/guests/${name}.json`,
                )
                .then(response => {
                    this.setState({ data: response.data });
                });
        }
    }

    submitSuccess(data) {
        this.setState({ data });
    }

    render() {
        const url = this.props.match.url;
        console.log(url);
        return (
            <div className="content">
                <Header url={url} />

                <Route exact path={`${url}`} component={Landing} />
                <Route path={`${url}/schedule`} component={Schedule} />
                <Route path={`${url}/location`} component={Location} />
                <Route path={`${url}/details`} component={Details} />
                {this.state.data &&
                    (this.state.data.submitted ? (
                        <Route
                            path={`${url}/rsvp`}
                            render={() => <Summary data={this.state.data} />}
                        />
                    ) : (
                        <Route
                            path={`${url}/rsvp`}
                            render={() => (
                                <Form
                                    data={this.state.data}
                                    name={this.props.match.params.name}
                                    submitSuccess={this.submitSuccess}
                                />
                            )}
                        />
                    ))}
            </div>
        );
    }
}

export default Content;
