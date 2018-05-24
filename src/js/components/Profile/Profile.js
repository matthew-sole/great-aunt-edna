import React from 'react';
import Image from '../Image/Image';

import './profile.css';

export default function(props) {
    return (
        <div className="profile">
            <Image
                className="profile__image"
                src={props.imageSrc}
                alt=""
                width="125px"
                height="125px"
            />
            <div className="profile__content">
                <p>{props.name}</p>
                <p>{props.profileRole}</p>
            </div>
        </div>
    );
}
