import React from 'react';
import './image.css';

export default function(props) {
    const { className, src, alt } = props;
    return <img className={className} src={src} alt={alt} />;
}
