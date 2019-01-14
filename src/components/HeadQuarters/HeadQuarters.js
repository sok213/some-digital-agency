import React, { Component } from 'react';
import s from './HeadQuarters.module.scss';
import Header from './../Header/Header';
import losAngeles from './../../assets/losangeles.jpg';
import sanFrancisco from './../../assets/sf.jpg';
import newYork from './../../assets/newyork.jpg';
import { Animated } from 'react-animated-css';

class HeadQuarters extends Component {
    constructor() {
        super();
        this.state = {
            isContentVisible: false,
            cities: [
                {
                    location: "Los Angeles",
                    img: losAngeles
                },
                {
                    location: "San Francisco",
                    img: sanFrancisco
                },
                {
                    location: "New York",
                    img: newYork
                }
            ]
        }
    }

    detectPageScroll = () => {
        if(this.props.amountScrolled > 2000 && !this.state.isContentVisible) {
            this.setState({ isContentVisible: true });
        }
    }

    renderCityItems = () => {
        return this.state.cities.map(({ location, img }) => {
            return (
                <div 
                    className={s.cityItem} 
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <div 
                        className={s.contentContainer}
                    >
                        <p>{location}</p>
                    </div>
                </div>
            );
        });
    }

    render() {
        this.detectPageScroll();

        return (
            <div 
                className={s.hqContainer} 
            >
                <Animated
                    animationIn="fadeIn" 
                    style={{ display: this.state.isContentVisible ? 'block' : 'none', width: "100%" }}
                    isVisible={this.state.isContentVisible}
                >
                    <div 
                        className={s.innerContainer}
                    >
                        <div className={s.headerContainer}>
                            <Header title="Headquarters" />
                        </div>
                        <div className={s.headline}>
                            <p>A Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dis parturient montes nascetur ridiculus. Ultrices mi tempus imperdiet nulla. Mi in nulla posuere sollicitudin.</p>
                        </div>
                        <div className={s.citiesContainer}>
                            <div className={s.cities}>
                                {this.renderCityItems()}
                            </div>
                        </div>
                    </div>
                </Animated>
            </div>
        );
    }
}

export default HeadQuarters;
