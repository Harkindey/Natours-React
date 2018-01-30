import React, { Component } from 'react';

class Features extends Component {
	render() {
		return (
			<section className="section-features">
				<div className="row">
					<div className="col-1-of-4">
						<div className="feature-box">
							<i className="feature-box__icon icon-basic-world" />
							<h3 className="heading-tertiary u-margin-bottom-small">
								Explore the World
							</h3>
							<p className="feature-box__text">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text
							</p>
						</div>
					</div>
					<div className="col-1-of-4">
						<div className="feature-box">
							<i className="feature-box__icon icon-basic-compass" />
							<h3 className="heading-tertiary u-margin-bottom-small">
								Meet Nature
							</h3>
							<p className="feature-box__text">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text
							</p>
						</div>
					</div>
					<div className="col-1-of-4">
						<div className="feature-box">
							<i className="feature-box__icon icon-basic-map" />
							<h3 className="heading-tertiary u-margin-bottom-small">
								Find Your Way
							</h3>
							<p className="feature-box__text">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text
							</p>
						</div>
					</div>
					<div className="col-1-of-4">
						<div className="feature-box">
							<i className="feature-box__icon icon-basic-heart" />
							<h3 className="heading-tertiary u-margin-bottom-small">
								Live A healthier life
							</h3>
							<p className="feature-box__text">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Features;
