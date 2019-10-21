import React, { Component } from 'react'
import Sidebar from "./sidebar";
import About from "./about";
import Projects from "./projects";

export default class MainPage extends Component {

    render() {
        return(
                    <div id="colorlib-main">
                        <About/>
                        {/*<Timeline/>*/}
                        <Projects/>
                    </div>

        )
    }
}