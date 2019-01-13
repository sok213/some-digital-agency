import React, { Component } from 'react';
import s from './HeadQuarters.module.scss';
import Header from './../Header/Header';
import losAngeles from './../../assets/losangeles.jpg';
import lasVegas from './../../assets/vegas.jpg';
import newYork from './../../assets/newyork.jpg';

class HeadQuarters extends Component {
    constructor() {
        super();
        this.state = {
            cities: [
                {
                    location: "Los Angeles",
                    img: losAngeles
                },
                {
                    location: "Las Vegas",
                    img: lasVegas
                },
                {
                    location: "New York",
                    img: newYork
                }
            ]
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
        return (
            <div className={s.hqContainer}>
                <div className={s.innerContainer}>
                    <Header title="Headquarters" />
                    <div className={s.citiesContainer}>
                        <div className={s.cities}>
                            {this.renderCityItems()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeadQuarters;
