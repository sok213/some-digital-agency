import React, { Component } from 'react';
import s from './Testimonials.module.scss';
import Header from './../Header/Header';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Testimonials extends Component {
    constructor() {
        super();

        this.state = {
            isHeaderVisible: false,
            testimonials: [
                {
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
                    client: "some dude"
                },
                {
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
                    client: "some dude"
                },
                {
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
                    client: "some dude"
                },
                {
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
                    client: "some dude"
                }
            ],
            activeQuote: 0
        }

    }

    detectPageScroll = () => {
        if(this.props.amountScrolled > 1450 && !this.state.isHeaderVisible) {
            this.setState({ isHeaderVisible: true });
        }
    }

    leftClick = () => {
        console.log('Left click')
    }

    rightClick = () => {
        console.log('Right click')
    }

    renderQuote = (test, key) => {
        const { quote, client } = test;

        return (
            <div className={s.quoteContainer} key={key}>
                <div className={s.quote}>
                    <p>{quote}</p>
                    <p> - {client}</p>
                </div>
            </div>
        )
    }

    renderActiveQuote = () => {
        const { quote, client } = this.state.testimonials[this.state.activeQuote];

        return (
            <div className={s.activeQuote}>
                <p><em>"{quote}"</em></p>
                <p>{client}</p>
            </div>
        )
    }

    render() {
        this.detectPageScroll();

        return (
            <div className={s.impactContainer}>
                <Animated
                    animationIn="fadeIn" 
                    style={{ display: this.state.isHeaderVisible ? 'flex' : 'none' }}
                >
                    <Header title="Testimonials" />
                </Animated>

                {/* Carousel */}
                <div className={s.carouselContainer}>
                    <div className={s.leftCtaContainer}>
                        <div className={s.leftCta}>
                            <button onClick={this.leftClick}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                        </div>
                    </div>
                    <div className={s.center}>
                        <div className={s.centerContent}>

                            {/* Testimonials */}
                            <div className={s.testimonials}>
                                {this.renderActiveQuote()}
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
                    <div className={s.rightCtaContainer}>
                        <div className={s.rightCta}>
                            <button onClick={this.rightClick}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;
