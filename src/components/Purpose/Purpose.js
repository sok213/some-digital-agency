import React, { Component } from 'react';
import s from './Purpose.module.scss';
import ImpactPhoto from './../../assets/hipsters.jpg';
import { Animated } from 'react-animated-css';
import Header from './../Header/Header';

class Purpose extends Component {
    constructor() {
        super();

        this.state = {
            isHeaderVisible: false,
            isContentVisible: false,
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

        if(this.state.amountScrolled > 400) {
            this.setState({ isHeaderVisible: true });
        }

        if(this.state.amountScrolled > 420) {
            this.setState({ isContentVisible: true });
        }
    }
    
    render() {
        return (
            <div className={s.purposeContainer}>
                <Animated 
                    animationIn="fadeIn" 
                    style={{ display: this.state.isHeaderVisible ? 'block' : 'none' }}
                >
                    <Header title="What We Are About" />
                </Animated>
                <div className={s.row}>
                    {/* Image */}
                    <div 
                        className={s.imageContainer} 
                        style={{ display: this.state.isContentVisible ? 'flex' : 'none' }}
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
                        style={{ display: this.state.isContentVisible ? 'flex' : 'none' }}    
                    >
                        <Animated animationIn="fadeInRight">
                            <div className={s.descContent}>
                                <h3>Our purpose to <span style={{ fontStyle: "italic" }}>impact</span></h3>
                                <p>In a world where society is more connected digitally than ever and yet more disconnected in reality than ever before, we believe that our platforms can bring balance back into the universe. <br /><br /> We are dedicated to delivering impactful platforms and experiences to consumers to make them feel and be connected with brands that they love and trust.</p>
                            </div>
                        </Animated>
                    </div>
                </div>
            </div>
        );
    }
}

export default Purpose;
