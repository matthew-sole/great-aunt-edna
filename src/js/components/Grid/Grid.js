import React from 'react';
import classNames from 'classnames';
import './grid.css';

export default function({ columns, rowSpacing, columnSpacing, children }) {
    const gridClassNames = classNames('grid', {
        [`grid--columns-${columns}`]: true,
        'grid--row-spacing': rowSpacing,
        'grid--column-spacing': columnSpacing,
    });

    return <div className={gridClassNames}>{children}</div>;
}
