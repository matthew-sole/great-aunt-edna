import React, { Component } from 'react';
import axios from 'axios';

import Form from '../Form/Form.container';
import Details from './Details/Details';
import Location from './Location/Location';
import Summary from '../Summary/Summary';
import Section from './../../components/Section/Section';
import Image from '../Image/Image';

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
        return (
            <div className="content">
                <Section noTop noBottom>
                    <div className="header">
                        <div>
                            <a href="">
                                <Image
                                    className=""
                                    src="/assets/images/logo.png"
                                    alt=""
                                    height="75px"
                                />
                            </a>
                        </div>
                        <ul className="navigation">
                            <li className="navigation__item">
                                <a className="navigation__link" href="#">
                                    Schedule
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="#">
                                    Location
                                </a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="#">
                                    Info
                                </a>
                            </li>
                            <li className="navigation__item navigation__item--button">
                                <a className="navigation__link" href="#">
                                    RSVP
                                </a>
                            </li>
                        </ul>
                    </div>
                </Section>
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
                <Location />
                <Details />
            </div>
        );
    }
}

export default Content;
