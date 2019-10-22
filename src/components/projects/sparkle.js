import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './projects.css';

export default class Sparkle extends Component {

    render(){
        return(
            <div className="topPadding">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-bottom-padded-sm">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">Sparkle Meal Tracker</span>
                                        <h2 className="colorlib-heading">About the project</h2>
                                    </div>
                                    <p>The premise of the project was a redesign for an existing app, with the theme of mental health.
                                        We chose to focus on eating disorders, and chose to do a redesign of various meal trackers,
                                        focusing on trying to reduce numerical data (such as calorie counts) in the app in order to
                                        reduce the risk of relapse for people who are in remission from eating disorders, but still
                                        want to track their food intake.</p>

                                    <p>Through some research we found that relapse is a concern when using meal trackers,
                                        and several of the people who responded to our initial survey stated that calorie-tracking
                                        apps are detrimental to their recovery from an eating disorder. </p>

                                    <p><b>Skills: </b> prototyping (lo-fi & hi-fi), wireframes, rapid user evaluations, parallel design, double diamond design process, structured brainstorming</p>

                                    <p><a href="https://invis.io/CFUG6TZYDXZ" target="_blank" rel="noopener noreferrer">Link to complete prototype</a></p>

                                    <Image className="projectImg" src="images/projects/sparkleSketch.png"/>
                                    <br/>
                                    <Image className="projectImg" src="images/projects/sparkleToday.png"/>
                                    <br/>
                                    <Image className="projectImg" src="images/projects/sparkleTTpng.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}