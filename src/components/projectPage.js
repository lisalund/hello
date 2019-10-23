import React, { Component } from 'react';
import Sidebar from "./sidebar";
import Sparkle from "./projects/sparkle";
import Agar from "./projects/agar";
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
                content = <div><p>Human perception project coming soon</p></div>;
                break;
            case "munchkin":
                content = <div><p>Munchkin project coming soon</p></div>;
                break;
            case "shakeme":
                content = <div><p>ShakeMe project coming soon</p></div>;
                break;
            case "soma":
                content = <div><p>Soma design project coming soon</p></div>;
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
