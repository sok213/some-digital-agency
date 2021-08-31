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
            isCarouselVisible: false,
            navDisabled: false,
            testimonials: [
                {
                    quote: "Some Digital Agency drastically overhauled our platform and now in just over 6 months, our revenues when up by 120% and our customers are happier than ever.",
                    client: "Mark Baker (C.E.O of some tech company)"
                },
                {
                    quote: "Before I discovered Some Digital Agency, I was driving a car with doors that opened regularly, but now after my platform made billions of dollars, I am driving a car that has doors that opens vertically which is awesome.",
                    client: "Russ Hanneman (Tech Billionaire)"
                },
                {
                    quote: "Some Digital Agency delivered all of our digital products and now I a have more money than my neighbor, Scott, which makes me happy because I hate Scott.",
                    client: "Vanessa Dobler (Owner of various e-commerce stores)"
                },
                {
                    quote: "Some Digital Agency did our business wonders! It changed our lives and the lives of our customers. Most importantly, it made me money.",
                    client: "Thomasface McFace (Some entrepreneur)"
                }
            ],
            activeQuote: 0
        }

    }

    detectPageScroll = () => {
        if(this.props.amountScrolled > 1450 && !this.state.isHeaderVisible) {
            this.setState({ isHeaderVisible: true });
        }

        if(this.props.amountScrolled > 1520 && !this.state.isCarouselVisible) {
            this.setState({ isCarouselVisible: true });
        }
    }

    handleTransition = (direction) => {
        this.setState({ 
            isQuoteVisible: false, 
            navDisabled: true 
        });

        setTimeout(() => {
            if(direction === 'right') {
                this.setState({ activeQuote: this.state.activeQuote + 1 });
            } else if(direction === 'left') {
                this.setState({ activeQuote: this.state.activeQuote - 1 });
            }

            this.setState({ 
                isQuoteVisible: true, 
                navDisabled: false 
            });
        }, 900);
    }

    leftClick = () => {
        if(this.state.activeQuote > 0) {
            this.handleTransition('left');
        }
    }

    rightClick = () => {
        if(this.state.activeQuote < 3) {
            this.handleTransition('right');
        }
    }

    renderActiveQuote = () => {
        const { 
            quote, 
            client 
        } = this.state.testimonials[this.state.activeQuote];

        return (
            <Animated
                animationIn="fadeIn" 
                style={{ display: this.state.isHeaderVisible ? 'flex' : 'none', width: "100%" }}
                isVisible={this.state.isQuoteVisible}
            >
                <div className={s.activeQuote}>
                    <p className={s.quote}><em>"{quote}"</em></p>
                    <p className={s.saidBy}>{client}</p>
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
                <Animated
                    animationIn="fadeIn" 
                    style={{ display: this.state.isCarouselVisible ? 'flex' : 'none' }}
                >
                    <div className={s.carouselContainer}>
                        <div className={s.leftCtaContainer}>
                            <div className={s.leftCta}>
                                <button 
                                    disabled={this.state.navDisabled}
                                    onClick={this.leftClick}
                                >
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
                                <button 
                                    disabled={this.state.navDisabled}
                                    onClick={this.rightClick}    
                                >
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </Animated>
            </div>
        );
    }
}

export default Testimonials;
