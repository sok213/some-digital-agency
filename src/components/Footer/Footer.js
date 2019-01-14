import React, { Component } from 'react';
import s from './Footer.module.scss';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faLinkedin,
    faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { 
    faCode,
    faChevronUp
} from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <div className={s.footerContainer}>
                <div className={s.footerContent}>
                    {/* <h3>MORE</h3> */}
                    <div className={s.col}>
                        <ul className={s.linksList}>
                            <h4>Some Stuff</h4>
                            <li>
                                <a href="#">
                                    <p>Portfolio<FontAwesomeIcon className={s.faIcon} icon={faCode} /></p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>LinkedIn<FontAwesomeIcon className={s.faIcon} icon={faLinkedin} /></p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>Medium<FontAwesomeIcon className={s.faIcon} icon={faMedium} /></p>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={s.col}>
                    <ul className={s.linksList}>
                            <h4>No One Clicks on These</h4>
                            <li>
                                <a href="#">
                                    <p>API</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <p>License</p>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={s.col}>
                        <ul className={s.linksList}>
                            <h4>Some More Stuff</h4>
                            <li><a href="#"><p>Contact</p></a></li>
                            <li><a href="#"><p>Status</p></a></li>
                            <li><a href="#"><p>Help</p></a></li>
                        </ul>
                    </div>
                    

                </div>
                <div className={s.credit}>
                <p>Some Digital Agency copyright 2019</p>
                    <div className={s.creditContainer}>
                        <a 
                            href="#"
                            className={s.toTopIcon}
                        >
                            <FontAwesomeIcon className={s.faChevronUp} icon={faChevronUp} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
