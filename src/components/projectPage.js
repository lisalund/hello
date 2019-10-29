import React, { Component } from 'react';
import Sidebar from "./sidebar";
import Sparkle from "./projects/sparkle";
import Agar from "./projects/agar";
import Perception from "./projects/perception";
import Soma from "./projects/soma";
import ShakeMe from "./projects/shakeme";
import Munchkin from "./projects/munchkin";
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
            case "agar":
                content = <Agar/>;
                break;
            case "perception":
                content = <Perception/>;
                break;
            case "munchkin":
                content = <Munchkin/>;
                break;
            case "shakeme":
                content = <ShakeMe/>;
                break;
            case "soma":
                content = <Soma/>;
                break;
            default:
                content = <div><p>Well, shit. The "{this.state.project}" project doesn't seem to exist.</p></div>
        }

        return(
            <div id="container-wrap">
                <Sidebar/>
                <div id="colorlib-main">
                    {content}
                </div>
            </div>
        )
    }
}
