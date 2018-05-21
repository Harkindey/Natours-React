import React, { Component } from 'react';

class Popup extends Component {
    render() {
        return (
            <div className="popup" id="popup">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src="img/nat-8.jpg" alt="Tour photo" className="popup__img" />
                        <img src="img/nat-9.jpg" alt="Tour photo" className="popup__img" />
                    </div>
                    <div className="popup__right">
                        <a href="#section-tours" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-">Start booking now</h2>
                        <h3 className="heading-tertiary  u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                        <p className="popup__text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit accusamus harum cum, explicabo eum aliquid culpa atque id impedit! Distinctio vitae recusandae culpa deserunt alias iste in placeat mollitia facilis.
                            Optio blanditiis sed labore amet accusamus molestiae fugiat placeat. Suscipit, est explicabo. Delectus eius a excepturi dicta sint tempora inventore at, maiores ullam doloribus necessitatibus illo obcaecati officiis ducimus dolor.
                        </p>
                        <a href="#" className="btn btn--green btn-green">Book now</a>
                    </div>
                </div>
            </div>
        )
    }
};
export default Popup;