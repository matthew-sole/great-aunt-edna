import React from 'react';
import Themes from '../Themes/Themes';
import './section.css';

export default function({ children, content, themeClass }) {
    return themeClass ? (
        <Themes themeClass={themeClass}>
            <div className="section">{children}</div>;
        </Themes>
    ) : (
        <div className="section">{children}</div>
    );
}
