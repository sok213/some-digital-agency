import React, { Component } from 'react';
import s from './NavBar.module.scss';

class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            amountScrolled: window.pageYOffset
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ amountScrolled: window.pageYOffset });
    }

    render() {
        console.log(this.state.amountScrolled)

        return (
            <div 
                className={`
                    ${s.navBarContainer}
                    ${this.state.amountScrolled > 120 ? s.active : s.nonActive }    
                `} 
            >
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
