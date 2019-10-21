import React, { Component } from 'react';
import Sidebar from "./sidebar";
import Sparkle from "./projects/sparkle"
export default class ProjectPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            project: this.props.match.params.project
        };
    }

    render() {
        let content = <p>Loading...</p>;
        console.log("project param: " + this.state.project);

        switch(this.state.project){
            case "":
                content = <p>Loading...</p>;
                break;
            case "sparkle":
                content = <Sparkle/>;
                break;
        }

        return(
            <div id="container-wrap">
                <Sidebar/>
                <div id="colorlib-main">
                    <p>content goes here</p>
                    {content}
                </div>
            </div>
        )
    }
}
