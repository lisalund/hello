import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Sidebar from './components/sidebar'
import MainPage from './components/mainPage'
import ProjectPage from './components/projectPage'

class App extends Component {
  render() {
    return (
        <div id="colorlib-page">
            <div id="container-wrap">
                <Sidebar/>
            <Route exact path="/hello/"
                    render={() => <MainPage/>}
            />
            <Route
                path="hello/:project"
                render={props => <ProjectPage {...props}/>}
            />
            </div>
        </div>
    );
  }
}

export default App;
