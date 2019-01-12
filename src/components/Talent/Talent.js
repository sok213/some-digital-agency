import React, { Component } from 'react';
import s from './Talent.module.scss';
import Header from './../Header/Header';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBrain, 
    faCogs, 
    faPencilRuler, 
    faChartArea 
} from '@fortawesome/free-solid-svg-icons';


class Talent extends Component {
    constructor() {
        super();

        this.state = {
            isHeaderVisible: false,
            isContentVisible: false,
            isTalentVisible: false,
            talents: [
                {
                    title: 'Innovate',
                    icon: null,
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    backgroundColor: '#EA4C5A',
                    color: "white",
                    icon: faCogs
                },
                {
                    title: 'Strategize',
                    icon: null,
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    backgroundColor: "#FEFEFE",
                    color: "#545454",
                    icon: faBrain
                },
                {
                    title: 'Design',
                    icon: null,
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    backgroundColor: "#22BBBE",
                    color: "white",
                    icon: faPencilRuler
                },
                {
                    title: 'Analyze',
                    icon: null,
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    backgroundColor: "#e5e5e5",
                    color: "#545454",
                    icon: faChartArea
                }
            ]
        }
    }

    detectPageScroll = () => {
        if(this.props.amountScrolled > 900 && !this.state.isHeaderVisible) {
            this.setState({ isHeaderVisible: true });
        }

        if(this.props.amountScrolled > 950 && !this.state.isContentVisible) {
            this.setState({ isContentVisible: true });
        }

        if(this.props.amountScrolled > 1070 && !this.state.isTalentVisible) {
            this.setState({ isTalentVisible: true });
        }

        console.log('Bleh: ', this.props.amountScrolled);
    }

    renderTalentItem = (item) => {
        const { 
            title, 
            icon, 
            desc,
            backgroundColor, 
            color } = item;

        return (
            <Animated
                animationIn="fadeIn" 
                style={{ display: this.state.isTalentVisible ? 'flex' : 'none' }}
            >
                <div className={s.talentItem} style={{ backgroundColor, color }}>
                    <div className={s.talentItemContent}>
                        <div className={s.iconContainer}>
                            <FontAwesomeIcon icon={icon} />
                        </div>
                        <h4 className={s.talentTitle}>{item.title}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dis parturient montes nascetur.</p>
                    </div>
                </div>
            </Animated>
        );
    }

    render() {
        this.detectPageScroll();

        return (
            <div className={s.talentContainer}>
                <div className={s.headerContainer}>
                    <Animated
                        animationIn="fadeInDown" 
                        style={{ display: this.state.isHeaderVisible ? 'block' : 'none' }}
                    >
                        <Header title="Made with heart" />
                    </Animated>
                    <div className={s.primaryTextContainer}>
                        <Animated
                            animationIn="fadeInUp" 
                            style={{ display: this.state.isContentVisible ? 'block' : 'none' }}
                        >
                            <div className={s.primaryTextContent}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dis parturient montes nascetur ridiculus. Ultrices mi tempus imperdiet nulla. Mi in nulla posuere sollicitudin.</p>
                            </div>
                        </Animated>
                    </div>
                </div>
                <div className={s.talentGridContainer}>
                    {this.state.talents.map(item => this.renderTalentItem(item))}
                </div>
            </div>
        );
    }
}

export default Talent;
