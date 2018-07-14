import React from 'react';
import { NavLink } from 'react-router-dom';
import Section from './../../components/Section/Section';
import Image from '../Image/Image';

import './header.css';

export default function({ url }) {
    return (
        <Section noTop noBottom>
            <div className="header">
                <div>
                    <NavLink exact to={`${url}`} activeClassName="u-hidden">
                        <Image
                            className=""
                            src="/assets/images/logo.png"
                            alt=""
                            height="75px"
                        />
                    </NavLink>
                </div>
                <ul className="navigation">
                    <li className="navigation__item">
                        <NavLink
                            to={`${url}/schedule`}
                            className="navigation__link"
                            activeClassName="navigation__link--active"
                            href="#"
                        >
                            Schedule
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink
                            to={`${url}/location`}
                            className="navigation__link"
                            activeClassName="navigation__link--active"
                            href="#"
                        >
                            Location
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink
                            to={`${url}/details`}
                            className="navigation__link"
                            activeClassName="navigation__link--active"
                            href="#"
                        >
                            details
                        </NavLink>
                    </li>
                    <li className="navigation__item navigation__item--button">
                        <NavLink
                            to={`${url}/rsvp`}
                            className="navigation__link"
                            activeClassName="navigation__link--active-button"
                            href="#"
                        >
                            RSVP
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Section>
    );
}
