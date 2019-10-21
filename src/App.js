import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Projects from './components/projects'
import MainPage from './components/mainPage'
import ProjectPage from './components/projectPage'

class App extends Component {
  render() {
    return (
        <div id="colorlib-page">
            <div id="container-wrap">
                <Sidebar/>
            <Route exact path="/"
                    render={() => <MainPage/>}
            />
            <Route
                path="/projects/:project"
                render={props => <ProjectPage {...props}/>}
            />
            </div>
        </div>
    );
  }
}

export default App;
