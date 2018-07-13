import React from 'react';

import Section from '../../Section/Section';
import Grid from '../../Grid/Grid';
import Profile from '../../Profile/Profile';

export default function() {
    return (
        <Section>
            <h2 id="bridal-party">Bridal Party</h2>
            <Grid columns="2" rowSpacing columnSpacing>
                <Profile
                    name="Melissa Matthews"
                    profileRole="Maid of Honour"
                    imageSrc="/assets/images/missy.png"
                />
                <Profile
                    name="Ben McKeown"
                    profileRole="Best Man"
                    imageSrc="/assets/images/ben1.png"
                />
                <Profile
                    name="Sally Taylor"
                    profileRole="Bridesmaid"
                    imageSrc="/assets/images/sally.png"
                />

                <Profile
                    name="Matthew Lister"
                    profileRole="Groomsman"
                    imageSrc="/assets/images/stiff1.png"
                />
            </Grid>
        </Section>
    );
}
