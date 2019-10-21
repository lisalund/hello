import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(/images/netlight-firstimpression-17.jpg)'}} />
                <h1 id="colorlib-logo"><Link to={'/hello'}>Lisa Lund</Link></h1>
              <span className="email"><i className="icon-mail"></i> lisa.lund93@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                  {/*<ul>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                </ul>*/}
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/l.lund93" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                  {/*<li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>*/}
                <li><a href="https://www.linkedin.com/in/lisa-lund/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/lisalund" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-coffee" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://dbarochiya.github.io/me/" target="_blank" rel="noopener noreferrer">Dhruv Barochiya</a> for inspiration
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
