import React, { Component } from 'react';
import s from './Purpose.module.scss';
import ImpactPhoto from './../../assets/hipsters.jpg';
import { Animated } from 'react-animated-css';
import Header from './../Header/Header';

class Purpose extends Component {
    constructor() {
        super();

        this.state = {
            isVisible: false,
            amountScrolled: window.pageYOffset
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ amountScrolled: window.pageYOffset });

        if(this.state.amountScrolled > 470) {
            this.setState({ isVisible: true });
        }
    }
    
    render() {
        console.log(this.state.amountScrolled)
        return (
            <div className={s.purposeContainer}>
                {/* Header */}
                <Header title="Purpose" />

                <div className={s.row}>
                    {/* Image */}
                    <div 
                        className={s.imageContainer} 
                        style={{ display: this.state.isVisible ? 'flex' : 'none' }}
                    >
                        <Animated animationIn="fadeInLeft">
                            <div className={s.imageContent}>
                                <img 
                                    src={ImpactPhoto} 
                                    alt="People jumping in air" 
                                    className={s.image}
                                />
                            </div>
                        </Animated>
                    </div>
                    {/* Description */}
                    <div 
                        className={s.descContainer}
                        style={{ display: this.state.isVisible ? 'flex' : 'none' }}    
                    >
                        <Animated animationIn="fadeInRight">
                            <div className={s.descContent}>
                                <h3>Our purpose to <span style={{ fontStyle: "italic" }}>impact</span></h3>
                                <p>Bro ipsum dolor sit amet rip tele skid lid avie. Cork cruiser ollie huck. Bonk big ring acro, reverse camber table top taco glove single track spread eagle rigid gorby shreddin pipe. Skate manny schwag laps sucker hole over the bars, brain bucket face shots pillow popping spin ski bum glades. Sketching washboard gaper huck, bomb corn Whistler park rat twister ACL.</p>
                            </div>
                        </Animated>
                    </div>
                </div>
            </div>
        );
    }
}

export default Purpose;
