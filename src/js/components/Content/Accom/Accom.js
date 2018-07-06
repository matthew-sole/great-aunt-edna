import React from 'react';

import Section from '../../Section/Section';
import Image from '../../Image/Image';

export default function() {
    return (
        <Section>
            <div className="two-column">
                <div className="sidebar"> 
                    <h2 id="accom">
                        <span className="u-accessible">Accommodation</span>
                        <Image
                            className=""
                            src='/assets/images/accom.png'
                            alt=""
                            width="200"
                        />
                    </h2>
                </div>
                <div className="content">
                    <p>
                        There is an abundant amount of places to stay in the CBD, and
                        within walking distance of the venue. We would recommend booked
                        earlier rather than later. So far there are no major events
                        scheduled for the same weekend, but if that changes -
                        accommodation can get snapped up very quickly and become hard to
                        find or expensive.
                    </p>
                </div>
            </div>  
        </Section>
    );
}
