import React, { Fragment } from 'react';

import Section from '../../Section/Section';
import MapContainer from '../../Map/MapContainer';
import Image from '../../Image/Image';

export default function() {
    return (
        <Fragment>
            <Section>
                <div className="two-column">
                    <div className="sidebar">
                        <h2 id="location">
                            <span className="u-accessible">Location</span>
                            <Image
                                className=""
                                src='/assets/images/location.png'
                                alt=""
                                width="150"
                            />
                        </h2>
                    </div>
                    <div className="content">
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
                        <MapContainer />
                        
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
                    </div>
                </div>
            </Section>
            <Section>
                <div className="two-column">
                    <div className="sidebar">
                        <h3>Public Transport</h3>
                    </div>
                    <div className="content">
                        <p>
                            There is plenty of public transport to the venue no matter where
                            you might be staying in the Wellington area. There are lots of
                            bus stops, and the main Wellington railway station is a 10-15min
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
                    </div>
                </div>
            </Section>
        </Fragment>
    );
}
