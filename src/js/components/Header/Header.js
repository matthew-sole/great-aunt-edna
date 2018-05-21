import React, { Component } from 'react';
import Image from '../Image/Image';
import classNames from 'classnames';
import './header.css';

class Header extends Component {
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
            <div className="header">
                <div className="header__content">
                    <h1
                        className={classNames('header__title', {
                            'header__title--loaded': this.state.loaded,
                        })}
                    >
                        Jack &amp; Jill
                    </h1>
                    <p
                        className={classNames('header__intro', {
                            'header__intro--loaded': this.state.loaded,
                        })}
                    >
                        <span className="header__intro-item">
                            April 6. 2019
                        </span>
                        <span className="header__intro-item">
                            Wellington, New Zealand
                        </span>
                    </p>
                </div>
                <div className="header__image">
                    <Image
                        className="image"
                        src="/assets/images/flower-banner.jpg"
                        alt="flower banner"
                        height="900px"
                    />
                </div>
            </div>
        );
    }
}

export default Header;
