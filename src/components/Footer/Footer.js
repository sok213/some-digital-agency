import React, { Component } from 'react';
import s from './Footer.module.scss';

class Footer extends Component {
    render() {
        return (
            <div className={s.footerContainer}>
                <div className={s.footerContent}>
                    <h3>More</h3>
                    <ul>
                        <li>Portfolio</li>
                        <li>LinkedIn</li>
                        <li>Medium</li>
                        <li>Mail </li>
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
