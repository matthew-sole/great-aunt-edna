import React from 'react';
import Section from '../Section/Section';

export default function({ data }) {
    console.log(data);
    const bbqMembers = data.members.reduce((members, item) => {
        if (item.bbqRsvp) {
            members.push(item);
        }
        return members;
    }, []);

    const weddingGuests = data.members.reduce((members, item) => {
        if (item.weddingRsvp) {
            members.push(item);
        }
        return members;
    }, []);
    return (
        <Section textLength>
            <h3>
                Your submission has been successful. Here is the information we
                have collected:
            </h3>
            <p>{data.displayName}</p>
            <h4>RSVP details</h4>
            {weddingGuests.length > 0 ? (
                weddingGuests.map(item => <p>{item.guestName}</p>)
            ) : (
                <p>No one will be attending</p>
            )}
            <h4>Contact Details</h4>
            <p>{data.contactDetails.address}</p>
            <p>{data.contactDetails.email}</p>
            <p>{data.contactDetails.phone}</p>
        </Section>
    );
}
