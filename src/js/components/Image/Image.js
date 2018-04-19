import React from 'react';
import './image.css';

export default function(props) {
    const { className, src, alt, width, height } = props;
    return (
        <img
            className={className}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    );
}
