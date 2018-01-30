import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<section className="section-about">
				<div className="u-center-text u-margin-bottom-big">
					<h2 className="heading-secondary">
						Exciting tours or advenurous people
					</h2>
				</div>
				<div className="row">
					<div className="col-1-of-2">
						<h3 className="heading-tertiary u-margin-bottom-small">
							You're Going to fall in love with nature
						</h3>
						<p className="paragraph">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book
						</p>
						<h3 className="heading-tertiary u-margin-bottom-small">
							Live Adventures like you never have before
						</h3>
						<p className="paragraph">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						</p>
						<a href="#" className="btn-text">
							Learn More &rarr;
						</a>
					</div>
					<div className="col-1-of-2">
						<div className="composition">
							<img
								src="img/nat-1-large.jpg"
								alt="Photo 1"
								className="composition__photo composition__photo--p1"
							/>
							<img
								src="img/nat-2-large.jpg"
								alt="Photo 2"
								className="composition__photo composition__photo--p2"
							/>
							<img
								src="img/nat-3-large.jpg"
								alt="Photo 3"
								className="composition__photo composition__photo--p3"
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
