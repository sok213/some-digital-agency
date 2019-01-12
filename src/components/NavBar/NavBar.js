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
                className={s.navBarContainer}
                style={{ opacity: this.state.amountScrolled > 124 ? 1 : 0.5 }}    
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
