import React, { Component } from 'react';
import s from './Talent.module.scss';
import Header from './../Header/Header';


class Talent extends Component {
    render() {
        return (
            <div className={s.talentContainer}>
                <Header title="Talent" />
            </div>
        );
    }
}

export default Talent;
