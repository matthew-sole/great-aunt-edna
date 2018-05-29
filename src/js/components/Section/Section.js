import React from 'react';
import Themes from '../Themes/Themes';
import './section.css';

export default function({ children, className, themeClass }) {
    return themeClass ? (
        <Themes themeClass={themeClass}>
            <div className={`section ${className}`}>{children}</div>;
        </Themes>
    ) : (
        <div className={`section ${className}`}>{children}</div>
    );
}
