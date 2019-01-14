import React, { Component } from 'react';
import s from './Jumbotron.module.scss';
import Particles from 'react-particles-js';
import { 
    Link,
    Events, 
    scrollSpy
 } from 'react-scroll';


class Jumbotron extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        Events.scrollEvent.register('begin');
        Events.scrollEvent.register('end');
        scrollSpy.update();
    }

    render() {

        return (
            <div className={s.jumbotronContainer} id="particles-js">
                <div className={s.headerContainer}>
                    <div className={s.headerContent}>
                        <h1>Some Digital Agency</h1>
                        <div className={s.underline}></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu. Sit amet purus gravida quis blandit turpis cursus in.</p>
                        
                        <Link 
                            className={s.discoverCta}
                            to="purpose" 
                            spy={true} 
                            smooth={true} 
                            offset={-30} 
                            duration={500}
                        >
                            <spam>DISCOVER</spam>
                        </Link>
                    </div>
                </div>
                <div className={s.particlesContainer}>
                    {/* <Particles /> */}
                </div>
            </div>
        );
    }
}

export default Jumbotron;
