import React, { Component } from 'react';
import s from './NavBar.module.scss';
import * as Scroll from 'react-scroll';
import { 
    Events, 
    animateScroll as scroll, 
    scrollSpy
 } from 'react-scroll';

class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            amountScrolled: window.pageYOffset
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        Events.scrollEvent.register('begin');
        Events.scrollEvent.register('end');
        scrollSpy.update();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ amountScrolled: window.pageYOffset });
    }

    scrollTo = (section) => {
        if(section === 'purpose') {
            scroll.scrollTo(620);
        } else if(section === 'talent') {
            scroll.scrollTo(1215);
        } else if(section === 'impact') {
            scroll.scrollTo(1800);
        } else if(section === 'hq') {
            scroll.scrollTo(2290);
        }
    }

    render() {
        return (
            <div 
                className={`
                    ${s.navBarContainer}
                    ${this.state.amountScrolled > 120 ? s.active : s.nonActive }    
                `} 
            >
                <ul className={s.mainNav}>
                    <li><a onClick={this.scrollTo.bind(this, 'purpose')}>Purpose</a></li>
                    <li><a onClick={this.scrollTo.bind(this, 'talent')}>Talent</a></li>
                    <li><a onClick={this.scrollTo.bind(this, 'impact')}>Impact</a></li>
                    <li><a onClick={this.scrollTo.bind(this, 'hq')}>HQ</a></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
