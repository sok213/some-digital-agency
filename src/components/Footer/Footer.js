import React, { Component } from 'react';
import s from './Footer.module.scss';

class Footer extends Component {
    render() {
        return (
            <div className={s.footerContainer}>
                <div className={s.footerContent}>
                    <h3>MORE</h3>
                    <ul className={s.linksList}>
                        <li><a href="#"><p>Portfolio</p></a></li>
                        <li><a href="#"><p>LinkedIn</p></a></li>
                        <li><a href="#"><p>Medium</p></a></li>
                        <li><a href="#"><p>Mail</p></a></li>
                    </ul>
                    <div className={s.credit}>
                        <p>Some Digital Agency copyright 2019</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
