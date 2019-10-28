import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './projects.css';

export default class Perception extends Component {

    render(){
        return(
            <div className="topPadding">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">Human perception study</span>
                                        <h2 className="colorlib-heading">About the project</h2>
                                    </div>
                                    <p>A small study about how short term memory is affected by colour combinations.</p>
                                    <p>50 experiments were performed where each participant was shown a sequence of
                                        letters in a certain colour, displayed on a differently coloured background.
                                        After 0.5 seconds the screen went blank, and then another sequence of letters was displayed in black text on white background.
                                    The participants were asked to judge whether the sequence was the same. This was then repeated 48 times for each participant.</p>

                                    <p><b>Skills: </b> Rapid prototyping, user testing, carrying out tests with users</p>

                                    <Image className="projectImg" src="images/projects/perception_firstscreen.png"/>
                                    <br/>
                                    <Image className="projectImg" src="images/projects/perception_secondscreen.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}