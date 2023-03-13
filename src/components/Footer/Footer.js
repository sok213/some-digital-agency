import React, { Component } from 'react';
import s from './Footer.module.scss';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faLinkedin,
    faMedium,
    faGithub
} from '@fortawesome/free-brands-svg-icons';
import { 
    faCode,
    faEnvelope,
    faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import { 
    Events, 
    animateScroll as scroll, 
    scrollSpy
 } from 'react-scroll';

class Footer extends Component {
    constructor() {
        super();

        this.state = {
            isContentVisible: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        Events.scrollEvent.register('begin');
        Events.scrollEvent.register('end');
        scrollSpy.update();
    }

    detectPageScroll = () => {
        if(this.props.amountScrolled > 2350 && !this.state.isContentVisible) {
            this.setState({ isContentVisible: true });
        }
    }

    getDate = () => {
      let d = new Date();
      let year = d.getFullYear();

      return year;
    }

    render() {
        this.detectPageScroll();

        return (
            <div className={s.footerContainer}>
                <Animated
                    animationIn="fadeIn" 
                    style={{ display: this.state.isContentVisible ? 'block' : 'none', width: "100%" }}
                    isVisible={this.state.isQuoteVisible}
                >
                    <div className={s.footerContent}>
                        {/* <h3>MORE</h3> */}
                        <div className={s.col}>
                            <ul className={s.linksList}>
                                <h4>Some Stuff</h4>
                                <li>
                                    <a 
                                        target="_blank"
                                        without rel="noopener noreferrer"
                                        href="https://www.hiresok.com/">
                                        <p>Portfolio<FontAwesomeIcon className={s.faIcon} icon={faCode} /></p>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        target="_blank"
                                        without rel="noopener noreferrer"
                                        href="https://www.linkedin.com/in/sophanarith-sok-a50097b7/">
                                        <p>LinkedIn<FontAwesomeIcon className={s.faIcon} icon={faLinkedin} /></p>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        target="_blank"
                                        without rel="noopener noreferrer"
                                        href="mailto:sokcodes@gmail.com">
                                        <p>E-mail<FontAwesomeIcon className={s.faIcon} icon={faEnvelope} /></p>
                                    </a>
                                </li>
                                <li>
                                  <a 
                                      target="_blank"
                                      without rel="noopener noreferrer"
                                      href="https://github.com/sok213/some-digital-agency/tree/master/src">
                                      <p>Website Source Code<FontAwesomeIcon className={s.faIcon} icon={faGithub} /></p>
                                  </a>
                                </li>
                            </ul>
                        </div>

                        <div className={s.col}>
                            <ul className={s.linksList}>
                                <h4>No One Clicks on These</h4>
                                <li>
                                    <a
                                        target="_blank"
                                        without rel="noopener noreferrer" 
                                        href="https://www.hiresok.com/"
                                    >
                                        <p>API</p>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        target="_blank"
                                        without rel="noopener noreferrer" 
                                        href="https://www.hiresok.com/"
                                    >
                                        <p>License</p>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className={s.col}>
                            <ul className={`${s.linksList}`}>
                                <h4>Some More Stuff</h4>
                                <li><a
                                    target="_blank"
                                    without rel="noopener noreferrer" 
                                    href="https://www.hiresok.com/"><p>Contact</p></a></li>
                                <li><a
                                    target="_blank"
                                    without rel="noopener noreferrer" 
                                    href="https://www.hiresok.com/"><p>Status</p></a></li>
                                <li><a
                                    target="_blank"
                                    without rel="noopener noreferrer" 
                                    href="https://www.hiresok.com/"><p>Help</p></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={s.credit}>
                        <p>Some Digital Agency copyright {this.getDate()}</p>
                        <div className={s.creditContainer}>
                            <button 
                                onClick={() => scroll.scrollToTop()}
                                className={s.toTopIcon}
                            >
                                <FontAwesomeIcon className={s.faChevronUp} icon={faChevronUp} />
                            </button>
                        </div>
                    </div>
                </Animated>
            </div>
        );
    }
}

export default Footer;
