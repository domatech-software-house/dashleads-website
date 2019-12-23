import React, { Component } from 'react'
import Lottie from 'react-lottie';
import * as animationData from './business_startup.json'

export default class Lotties extends Component {

    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        const styles = {
            svg: {
                width: "100%",
                heigth: "auto",
                // transform: "translate3d(0px, 0px, 0px) scale(1.5)"
            }
        }

        return (
            <Lottie
                options={defaultOptions}
                style={styles.svg}
                isStopped={false}
                isPaused={false} />
        );

    }
}