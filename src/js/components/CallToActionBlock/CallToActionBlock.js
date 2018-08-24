import React from 'react';
import './callToActionBlock.css';

const CallToActionBlock = props => {
    return <div className="cta-block">{props.children}</div>;
};

export default CallToActionBlock;
