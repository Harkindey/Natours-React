import React, { Component } from 'react';

class Booking extends Component {
    render() {
        return (
            <section className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">Start Booking Now</h2>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" id="name" placeholder="Full Name" required />
                                    <label htmlFor="name" className="form__label">Full Name</label>
                                </div>
                                <div className="form__group">
                                    <input type="email" className="form__input" id="email" placeholder="Email" required />
                                    <label htmlFor="email" className="form__label">Email</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};
export default Booking;