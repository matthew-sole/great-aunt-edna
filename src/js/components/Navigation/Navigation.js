import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../Section/Section';

import './navigation.css'

export default function() {
    return (
        <Section>
            <ul className="navigation">
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
        </Section>
    )
}