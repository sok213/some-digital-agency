import React, { Component } from 'react';
import s from './Testimonials.module.scss';
import Header from './../Header/Header';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Testimonials extends Component {
    constructor() {
        super();

        this.state = {
            isHeaderVisible: false
        }

    }

    detectPageScroll = () => {
        if(this.props.amountScrolled > 1450 && !this.state.isHeaderVisible) {
            this.setState({ isHeaderVisible: true });
        }
    }

    render() {
        this.detectPageScroll();

        return (
            <div className={s.impactContainer}>
                <Animated
                    animationIn="fadeIn" 
                    style={{ display: this.state.isHeaderVisible ? 'flex' : 'none' }}
                >
                    <Header title="Our Impact" />
                </Animated>

                {/* Carousel */}
                <div className={s.carouselContainer}>
                    <div className={s.leftCta}>
                        <a>Left</a>
                    </div>
                    <div className={s.center}>
                        <div className={s.centerContent}>

                            {/* Testimonials */}
                            <div className={s.testimonials}>
                                <p>test</p>
                            </div>

                            {/* Dots */}
                            <div className={s.dotsContainer}>
                                <ul>
                                    <li><a></a></li>
                                    <li><a></a></li>
                                    <li><a></a></li>
                                    <li><a></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={s.rightCta}>
                        <div className={s.rightCtaContent}>
                            <a>Right</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;
