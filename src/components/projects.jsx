import React, { Component } from 'react'
import { Card, CardColumns } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Projects extends Component {
  render() {
      let sparkleCard = (<Card>
          <Card.Img variant="top" src="images/projects/sparkleCard.png" />
          <Card.Body className="projectCard">
              <Card.Title>Sparkle Food Diary</Card.Title>
              <Card.Text>
                  A prototype for a food-tracking app meant for people in remission from an eating disorder
              </Card.Text>
          </Card.Body>
      </Card>);

      let agarCard = (
          <Card>
              <Card.Img variant="top" src="images/projects/agarCard.png" />
              <Card.Body className="projectCard">
                  <Card.Title>Agar.io evaluation</Card.Title>
                  <Card.Text>
                      A usability evaluation of the game Agar.io
                  </Card.Text>
              </Card.Body>
          </Card>);

      let perceptionCard = (<Card>
          <Card.Img variant="top" src="images/projects/perceptionCard.png" />
          <Card.Body className="projectCard">
              <Card.Title>Experiment on human short-term memory</Card.Title>
              <Card.Text>
                  An experiment about how colour combinations affect human short-term memory
              </Card.Text>
          </Card.Body>
      </Card>);

      let somaCard = (<Card>
          <Card.Img variant="top" src="images/projects/somaCard.png" />
          <Card.Body className="projectCard">
              <Card.Title>Somaesthetic Design</Card.Title>
              <Card.Text>
                  Designing a somaesthetic domestic appliance
              </Card.Text>
          </Card.Body>
      </Card>);

      let shakeMeCard = (<Card>
          <Card.Img variant="top" src="images/projects/shakemeCard.png" />
          <Card.Body className="projectCard">
              <Card.Title>ShakeMe App</Card.Title>
              <Card.Text>
                  A simple React Native app that generates pickup lines from an API
              </Card.Text>
          </Card.Body>
      </Card>);
      let munchkinCard = (<Card>
          <Card.Img variant="top" src="images/projects/munchkinCard.png" />
          <Card.Body className="projectCard">
              <Card.Title>Munchkin AR</Card.Title>
              <Card.Text>
                  Augmented reality for the tabletop game Munchkin
              </Card.Text>
          </Card.Body>
      </Card>);

  	return(
  		<div>
			<section className="colorlib-work" data-section="projects">
                <div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading">Projects</h2>
						</div>
					</div>
						<CardColumns>
                            <Link to={'/sparkle'}>{sparkleCard}</Link>
                            <Link to={'/perception'}>{perceptionCard}</Link>
                            <Link to={'/agar'}>{agarCard}</Link>
                            <Link to={'/shakeme'}>{shakeMeCard}</Link>
                            <Link to={'/soma'}>{somaCard}</Link>
                            <Link to={'/munchkin'}>{munchkinCard}</Link>

						</CardColumns>
					<div>

					</div>
				</div>
			</section>
		</div>
	)

    /*return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 01</a></h3>
											<span>Website</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 02</a></h3>
											<span>Animation</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 03</a></h3>
											<span>Illustration</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )*/
  }
}
