import React, { Component } from 'react';
import s from './HeadQuarters.module.scss';
import Header from './../Header/Header';

class HeadQuarters extends Component {
    constructor() {
        super();
        this.state = {
            cities: [
                {
                    location: "Los Angeles",
                    img: "#"
                },
                {
                    location: "Las Vegas",
                    img: "#"
                },
                {
                    location: "New York",
                    img: "#"
                }
            ]
        }
    }

    renderCityItems = () => {
        return this.state.cities.map(({ location, img }) => {
            return (
                <div className={s.cityItem}>
                    <p>{location}</p>
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
