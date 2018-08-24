import React from 'react';
import Section from '../Section/Section';
import CallToActionBlock from '../CallToActionBlock/CallToActionBlock';

export default function({ data, name }) {
    const weddingGuests = data.members.reduce((members, item) => {
        if (item.weddingRsvp) {
            members.push(item);
        }
        return members;
    }, []);
    return (
        <Section textLength superTop>
            <h3>{`Hi ${data.displayName}, your rsvp has been sucessful. `}</h3>

            <p>Here is the information you provided:</p>
            <CallToActionBlock>
                {weddingGuests.length > 0 ? (
                    weddingGuests.map(item => <p>{item.guestName}</p>)
                ) : (
                    <p>No one will be attending</p>
                )}
                <p>
                    <strong>
                        Email: <br />
                    </strong>
                    {data.contactDetails.email}
                </p>
                <p>
                    <strong>
                        Phone: <br />
                    </strong>
                    {data.contactDetails.phone}
                </p>
            </CallToActionBlock>

            <p>
                If this is no longer correct, please{' '}
                <a
                    href={`mailto:claire.campbellnz@gmail.com?subject=RSVP%20update%20${name}`}
                >
                    get in touch.
                </a>
            </p>
        </Section>
    );
}
