import React, { Component } from 'react';
import s from './Jumbotron.module.scss';

class Jumbotron extends Component {
    render() {
        return (
            <div className={s.jumbotronContainer}>
                Jumbotron Component.
            </div>
        )
    }
}

export default Jumbotron;
