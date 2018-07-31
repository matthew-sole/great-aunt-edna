import React from 'react';
import Image from '../Image/Image';

import './profile.css';

export default function(props) {
    return (
        <div className="profile">
            <Image
                className="profile__image"
                src={props.imageSrc}
                alt={`Profile image of ${props.name}`}
            />
            <div className="profile__content">
                <h4>{props.name}</h4>
                <p>{props.profileRole}</p>
            </div>
        </div>
    );
}
