import React, { Component } from 'react';
import s from './Talent.module.scss';
import Header from './../Header/Header';
import { Animated } from 'react-animated-css';


class Talent extends Component {
    constructor() {
        super();

        this.state = {
            isHeaderVisible: false,
            isContentVisible: false,
        }
    }

    isHeaderVisible = () => {
        if(this.props.amountScrolled > 900 && !this.state.isHeaderVisible) {
            this.setState({ isHeaderVisible: true });
        }

        console.log('Bleh: ', this.props.amountScrolled);
    }

    render() {
        this.isHeaderVisible();

        return (
            <div className={s.talentContainer}>
                <Animated
                    animationIn="fadeIn" 
                    style={{ display: this.state.isHeaderVisible ? 'block' : 'none' }}
                >
                    <Header title="Talent" />
                </Animated>
            </div>
        );
    }
}

export default Talent;
