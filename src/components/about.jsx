import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class About extends Component {
    constructor(props){
        super(props);
        this.openCV = this.openCV.bind(this);
    }


    openCV(e){
        console.log("clicked: " + e.target.id);
        let cvLinkEng = "https://drive.google.com/file/d/1SVhxMxZV8KRhCLfpCMOy2ZpAxYlmf2gb/view?usp=sharing";
        let cvLinkSwe = "https://drive.google.com/file/d/1JqauteLsLEFnMbyko-v3FudN-vFXnlsi/view?usp=sharing";

        //open the relevant link in a new tab
        if(e.target.id === "swedish"){
            console.log("matched swedish");
            window.open(cvLinkSwe, '_blank');
        } else {
            window.open(cvLinkEng, '_blank');
        }

    }
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm a computer science student at KTH Royal Institute of Technology in Stockholm. While my major is computer science, I have chosen to focus on interaction design, as I want to work close to humans.
                    I'm nearing the end of my studies, and I'm currently writing my master's thesis. </p>
                    <p>
                        In my free time I knit, draw and do yoga. I also foster cats for Stockholms Katthem (right now I'm taking care of <a href="http://www.katthemmet.nu/katter/katter-i-akuthem/shailene.aspx" target="_blank" rel="noopener noreferrer">Shailene</a>).
                    </p>
                    </div>
                    <div className="CVbuttons">
                        <Button variant="light" id="english" onClick={this.openCV}><i className="icon-download"/> CV in English</Button>
                        <Button variant="light" id="swedish" onClick={this.openCV}><i className="icon-download"/> CV in Swedish</Button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
          {/*<section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>*/}
      </div>
    )
  }
}
