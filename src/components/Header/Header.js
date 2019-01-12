import React, { Component } from 'react';
import s from './Header.module.scss';

class Header extends Component {
    render() {
        return (
            <div className={s.headerContainer}>
                <div className={s.headerContent}>
                    <h2>{this.props.title}</h2>
                    <div className={s.underline}></div>
                </div>
            </div>
        );
    }
}

export default Header;
