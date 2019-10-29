import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './projects.css';

export default class Munchkin extends Component {

    render(){
        return(
            <div className="topPadding">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">Munchkin AR</span>
                                        <h2 className="colorlib-heading">About the project</h2>
                                    </div>
                                    <p>A proof of concept for an augmented reality interface for the tabletop game Munchkin. Made in Unity with Vuforia.</p>

                                    <p><b>Skills: </b> Multimodal design, AR, mobile development</p>

                                    <Image className="projectImg" src="images/projects/munchkinFlow.png"/>
                                    <br/>
                                    <Image className="projectImg" src="images/projects/munchkinPlayer.png"/>
                                    <br/>
                                    <Image className="projectImg" src="images/projects/munchkinDoor.png"/>
                                    <br/>
                                    <Image className="projectImg" src="images/projects/munchkinMonsters.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}