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
            isQuoteVisible: true,
            testimonials: [
                {
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
                    client: "some dude 1"
                },
                {
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
                    client: "some dude 2"
                },
                {
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
                    client: "some dude 3"
                },
                {
                    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
                    client: "some dude 4"
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

    handleTransition = () => {
        this.setState({ isQuoteVisible: false });
        setTimeout(() => {
            this.setState({ isQuoteVisible: true });
        }, 900);
    }

    leftClick = () => {
        if(this.state.activeQuote > 0) {
            this.setState({ activeQuote: this.state.activeQuote - 1 });
            this.handleTransition();
        }
    }

    rightClick = () => {
        if(this.state.activeQuote < 3) {
            this.setState({ activeQuote: this.state.activeQuote + 1 });
            this.handleTransition();
        }
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
            <Animated
                animationIn="fadeIn" 
                style={{ display: this.state.isHeaderVisible ? 'flex' : 'none', width: "100%" }}
                isVisible={this.state.isQuoteVisible}
            >
                <div className={s.activeQuote}>
                    <p><em>"{quote}"</em></p>
                    <p>{client}</p>
                </div>
            </Animated>
        );
    }

    renderDots = () => {
        const { testimonials, activeQuote } = this.state;

        return testimonials.map((test, key) => {
            return (
                <li 
                    className={`
                        ${activeQuote === key ? s.activeDot : null} 
                        ${s.dot}
                    `}
                    key={key}
                >
                    <a></a>
                </li>
            );
        });
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
                                    {this.renderDots()}
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
