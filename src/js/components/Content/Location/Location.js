import React from 'react';

import Section from '../../Section/Section';
import MapContainer from '../../Map/MapContainer';

export default function() {
    return (
        <Section textLength superTop>
            <h2>Location</h2>
            <MapContainer />
            <p>
                Both Ceremony and Reception will take place at the{` `}
                <a
                    href="http://www.theboatshedvenue.co.nz/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    The Boatshed
                </a>
                {` `}
                on the Wellington waterfront.
            </p>
            <p>
                Please note that there is no on site parking at the venue. If
                you are driving, there is plenty of parking available around the
                city. This{' '}
                <a
                    href="https://www.myguidewellington.com/usefulinfo/wellington-parking"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    handy guide
                </a>{' '}
                might be helpful in order to find the best place to leave you
                car on the day and/or the evening.
            </p>
            <h3>Public Transport</h3>
            <p>
                There will be public transport that will be able to get you
                close to the venue no matter where you might be staying. There
                are bus stops that will run a few blocks away from the the
                venue, and the main Wellington railway station is a 10-15min
                walk away.
            </p>
            <p>
                All public transport can be found at{' '}
                <a
                    href="https://www.metlink.org.nz/#plan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Metlink
                </a>{' '}
                , and they have a helpful{' '}
                <a
                    href="https://www.metlink.org.nz/#plan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    online tool
                </a>{' '}
                to help plan your public transport to and from the greater
                Wellington region
            </p>
            <h3>Accommodation</h3>
            <p>
                There is an abundant amount of places to stay in the CBD, and
                within walking distance of the venue. We would recommend booked
                earlier rather than later. So far there are no major events
                scheduled for the same weekend, but if that changes -
                accommodation can get snapped up very quickly and become hard to
                find or expensive.
            </p>
        </Section>
    );
}
