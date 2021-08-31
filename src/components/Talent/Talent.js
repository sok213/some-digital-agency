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
                    desc: 'Same same, but different. Utilizing proven effective case studies, we have chosen design and marketing strategies that have a proven track record for delivering the best results while also building upon these practices to establising our products as the leading edge of modern digital media.',
                    backgroundColor: '#EA4C5A',
                    color: "white",
                    icon: faCogs
                },
                {
                    title: 'Strategize',
                    desc: 'Think. Plan. Execute. Through our sophisticated sprint processes, we guarantee that platforms and services are launched on time, stable, and we strive to surpass expectations.',
                    backgroundColor: "#FEFEFE",
                    color: "#545454",
                    icon: faBrain
                },
                {
                    title: 'Design',
                    desc: 'Our designers are passionate about bringing the most aesthetically impactful experiences that utilizes the most effective marketing methods to communicate the product to the customers in the most meaningful way possible.',
                    backgroundColor: "#22BBBE",
                    color: "white",
                    icon: faPencilRuler
                },
                {
                    title: 'Analyze',
                    desc: 'We study user data to get deep insight into what works in a digital product and what can improve. Get insight into how your users behave with your products and understand the best way to innovate using data sets to strategically maximize user engagement.',
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
    }

    renderTalentItem = (item, key) => {
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
                key={key}
            >
                <div className={s.talentItem} style={{ backgroundColor, color }}>
                    <div className={s.talentItemContent}>
                        <div className={s.iconContainer}>
                            <FontAwesomeIcon icon={icon} />
                        </div>
                        <h4 className={s.talentTitle}>{title}</h4>
                        <p>{desc}</p>
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
                                <p>Authenticity is the core trait of trust and establishing meaningful relationships between consumers and brands. Every digital product we design is carefully put together to ensure that our clients can effectively communicate their ideas to their customers to ensure transparency and maximize loyalty.</p>
                            </div>
                        </Animated>
                    </div>
                </div>
                <div className={s.talentGridContainer}>
                    {this.state.talents.map((item, key) => this.renderTalentItem(item, key))}
                </div>
            </div>
        );
    }
}

export default Talent;
