import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './projects.css';

export default class Agar extends Component {

    render(){
        return(
            <div className="topPadding">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">Agar.io evaluation</span>
                                        <h2 className="colorlib-heading">About the project</h2>
                                    </div>
                                    <p>An evaluation of the game Agar.io, comparing the user experience between the PC and smartphone versions.
                                    The hypothesis was that the smartphone version provided a worse situational awareness in the game than the PC version,
                                    and our evaluations indicate that we were correct. We also presented some recommendations to improve the user
                                    experience in the smartphone version.</p>

                                    <p><b>Skills: </b> Qualitative and quantitative usability evaluation</p>

                                    <Image className="projectImg" src="images/raw/agarDoubleGrip.jpg"/>
                                    <br/>
                                    <Image className="projectImg" src="images/projects/agarSuggestion.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}