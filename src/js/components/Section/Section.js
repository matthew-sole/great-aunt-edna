import React from 'react';
import './section.css';

export default function({ noTop, children }) {
    return (
        <div className={`section ${noTop && 'section--no-top'}`}>
            {children}
        </div>
    );
}
