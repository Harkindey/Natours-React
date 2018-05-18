import React, { Component } from 'react';

class Stories extends Component {
    render() {
        return (
            <section className="section-stories">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="img/video.mp4" type="video/mp4" />
                        <source src="img/video.webm" type="video/webm" />
                        Your browser is not supported!
                    </video>
                </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        We Make people genuiuely happy
                    </h2>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="img/nat-8.jpg" alt="person on a tour" className="story__img" />
                            <figcaption className="story__caption">Mary Smith</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="img/nat-9.jpg" alt="person on a tour" className="story__img" />
                            <figcaption className="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn-text">
                        Read all stories &rarr;
					</a>
                </div>
            </section>
        )
    }
};

export default Stories;
