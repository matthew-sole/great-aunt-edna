import React, { Component } from 'react';
import Image from '../../Image/Image';
import classNames from 'classnames';
import './landing.css';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loaded: true });
        }, 0);
    }

    render() {
        return (
            <div className="landing">
                <div className="landing__content">
                    <h1
                        className={classNames('landing__title', {
                            'landing__title--loaded': this.state.loaded,
                        })}
                    >
                        <Image
                            className=""
                            src="/assets/images/logo.png"
                            alt=""
                            width="600px"
                        />
                    </h1>
                    <h3
                        className={classNames('landing__intro', {
                            'landing__intro--loaded': this.state.loaded,
                        })}
                    >
                        <span className="landing__intro-item">
                            April 6 2019
                        </span>
                        <span className="landing__intro-item">
                            Wellington NZ
                        </span>
                    </h3>
                </div>
                <div className="landing__image">
                    {/*<Image
                        className="image"
                        src="/assets/images/ccmatt.jpg"
                        alt="flower banner"
                        height="900px"
                    /> */}
                </div>
            </div>
        );
    }
}

export default Landing;
