import React from 'react';

export default function({noTop, children}) {
    return (
        <div className={`section ${noTop && 'section--no-top'}`}>{children}</div>
    )
}