import React from 'react';

import Section from '../../Section/Section';
import Image from '../../Image/Image';

export default function() {
    return (
        <Section>
            <h2 id="gifts">
                <span className="u-accessible">Gifts</span>
                <Image
                    className=""
                    src='/assets/images/gifts.png'
                    alt=""
                    height="150"
                />
            </h2>
            <p>
                Your presence at our wedding is the best present we can get.
                However, if you would like to bring a gift, we would be grateful
                for a financial contribution towards a little romantic getaway.
            </p>
        </Section>
    );
}
