import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './projects.css';

export default class ShakeMe extends Component {

    render(){
        return(
            <div className="topPadding">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">ShakeMe app</span>
                                        <h2 className="colorlib-heading">About the project</h2>
                                    </div>
                                    <p>A simple app that generates pickup lines when the device is shook, made in React Native using Expo.</p>

                                    <p><b>Skills: </b> Mobile development, React Native</p>

                                    <Image className="projectImg" src="images/projects/shakemehome.png"/>
                                    <br/>
                                    <Image className="projectImg" src="images/projects/shakemestart.png"/>
                                    <br/>
                                    <Image className="projectImg" src="images/projects/shakemeuse.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}