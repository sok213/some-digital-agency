import React, { Component } from 'react';
import s from './HeadQuarters.module.scss';
import Header from './../Header/Header';

class HeadQuarters extends Component {
    render() {
        return (
            <div className={s.hqContainer}>
                <div className={s.innerContainer}>
                    <Header title="Headquarters" />
                </div>
            </div>
        );
    }
}

export default HeadQuarters;
