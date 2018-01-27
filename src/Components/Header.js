import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="logo-box">
					<img src="../img/logo-white.png" alt="logo" className="logo" />
				</div>
				<div className="text-box">
					<h1 className="heading-primary">
						<span className="heading-primary-main">Outdoors</span>
						<span className="heading-primary-sub">Is where Life happens</span>
					</h1>
					<a href="#" className="btn btn-white">
						Discover Our Tours
					</a>
				</div>
			</header>
		);
	}
}

export default Header;
