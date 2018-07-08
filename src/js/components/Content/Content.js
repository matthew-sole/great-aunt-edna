import React, { Component } from 'react';
import axios from 'axios';

import Accom from './Accom/Accom';
import BridalParty from './BridalParty/BridalParty';
import Form from '../Form/Form.container';
import Gifts from './Gifts/Gifts';
import Location from './Location/Location';
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
        return (
            <div className="app">
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
                <Accom />
                <BridalParty />
                <Gifts />
            </div>
        );
    }
}

export default Content;
