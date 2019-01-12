import React, { Component } from 'react';
import s from './NavBar.module.scss';

class NavBar extends Component {
    render() {
        return (
            <div className={s.navBarContainer}>
                <ul class={s.mainNav}>
                    <li><a href="#">Purpose</a></li>
                    <li><a href="#">Talent</a></li>
                    <li><a href="#">Impact</a></li>
                    <li><a href="#">HQ</a></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
