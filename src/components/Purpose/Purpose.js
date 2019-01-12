import React, { Component } from 'react';
import s from './Purpose.module.scss';

class Purpose extends Component {
    render() {
        return (
            <div className={s.purposeContainer}>
                {/* Header */}
                <div className={s.headerContainer}>
                    <div className={s.headerContent}>
                        <h2>Mission</h2>
                        <div className={s.underline}></div>
                        <h3>Our Mission Is to Impact</h3>
                    </div>
                </div>

                <div className={s.row}>
                    {/* Image */}
                    <div className={s.imageContainer}>
                        <div className={s.imageContent}>
                            <p>Image Container</p>
                        </div>
                    </div>
                    {/* Description */}
                    <div className={s.descContainer}>
                        <div className={s.descContent}>
                            <p>Bro ipsum dolor sit amet rip tele skid lid avie. Cork cruiser ollie huck. Bonk big ring acro, reverse camber table top taco glove single track spread eagle rigid gorby shreddin pipe. Skate manny schwag laps sucker hole over the bars, brain bucket face shots pillow popping spin ski bum glades. Sketching washboard gaper huck, bomb corn Whistler park rat twister ACL.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Purpose;
