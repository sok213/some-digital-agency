import React, { Component } from 'react';
import s from './Jumbotron.module.scss';
import Particles from 'react-particles-js';

class Jumbotron extends Component {

    render() {

        return (
            <div className={s.jumbotronContainer} id="particles-js">
                <div className={s.headerContainer}>
                    <div className={s.headerContent}>
                        <h1>Some Digital Agency</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu. Sit amet purus gravida quis blandit turpis cursus in.</p>
                        <button className={s.discoverCta}>Discover</button>
                    </div>
                </div>

                {/* <Particles style={{ border: "thin solid red" }} /> */}
            </div>
        );
    }
}

export default Jumbotron;
