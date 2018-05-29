import React from 'react';
import './themes.css';

export default function({ children, themeClass }) {
    return <div className={`theme--${themeClass}`}>{children}</div>;
}
