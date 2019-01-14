import React, { Component } from 'react';
import s from './NavBar.module.scss';
import * as Scroll from 'react-scroll';
import { 
    Link,
    Element,
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
                    <li>
                        <Link 
                            to="purpose" spy={true} smooth={true} offset={-30} duration={500}
                        >
                            Purpose
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="talent" spy={true} smooth={true} offset={-30} duration={500}
                        >
                            Talent
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="impact" spy={true} smooth={true} offset={-30} duration={500}
                        >
                            Impact
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="hq" spy={true} smooth={true} offset={-30} duration={500}
                        >
                            HQ
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
