import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './projects.css';

export default class Soma extends Component {

    render(){
        return(
            <div className="topPadding">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">Somaesthetic Design</span>
                                        <h2 className="colorlib-heading">About the project</h2>
                                    </div>
                                    <p>A project where the goal was to design a somaesthetic domestic appliance.
                                        We created a concept vacuum cleaner, where the design was focused around the
                                        user moving their body in order to control the product.
                                        The idea being that it would create a more enjoyable cleaning experience.</p>

                                    <p><b>Skills: </b> Somaesthetic design, physical prototyping, reflective design, moodboarding</p>

                                    <Image className="projectImg" src="images/projects/somaMindMap.png"/>
                                    <br/>
                                    <Image className="projectImg" src="images/projects/somaSketches.png"/>
                                    <br/>
                                    <Image className="projectImg" src="images/raw/somaGlove.jpg"/>
                                    <br/>
                                    <Image className="projectImg" src="images/raw/somaPresent.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}