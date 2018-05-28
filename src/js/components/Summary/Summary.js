import React from 'react';

export default function({ data }) {
    const bbqMembers = data.members.reduce((members, item) => {
        if (item.bbqRsvp) {
            members.push(item);
        }
        return members;
    }, []);
    return (
        <div>
            <h3>
                Your submission has been successful. Here is the information we
                have collected:
            </h3>
            <p>{data.displayName}</p>
            <h3>Contact Details</h3>
            <p>{data.contactDetails.address}</p>
            <p>{data.contactDetails.email}</p>
            <p>{data.contactDetails.phone}</p>
            <h3>RSVP details</h3>
            <h4>Wedding</h4>
            {data.members.map(
                item => item.weddingRsvp && <p>{item.guestName}</p>,
            )}
            <h4>BBQ</h4>
            {bbqMembers.length > 0 ? (
                bbqMembers.map(item => <p>{item.guestName}</p>)
            ) : (
                <p>We don't have any down for the BBQ</p>
            )}
        </div>
    );
}
