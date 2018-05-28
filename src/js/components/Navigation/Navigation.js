import React from 'react';
import Section from '../Section/Section';

import './navigation.css'

export default function() {
    return (
        <Section>
            <ul className="navigation">
                <li>
                    <a href="#accom">Accom</a>
                </li>
                <li>
                    <a href="#bridal-party">Bridal Party</a>
                </li>
                <li>
                    <a href="#location">Location</a>
                </li>
                <li>
                    <a href="#gifts">Gifts</a>
                </li>
            </ul>
        </Section>
    )
}