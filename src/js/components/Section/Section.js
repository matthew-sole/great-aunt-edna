import React from 'react';
import classNames from 'classnames';
import './section.css';

export default function({ children, noTop, noBottom, textLength }) {
    return (
        <div
            className={classNames({
                section: true,
                'section--no-top': noTop,
                'section--no-bottom': noBottom,
                'section--text-length': textLength,
            })}
        >
            {children}
        </div>
    );
}
