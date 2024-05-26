import React from 'react'

const ContactPage = () => {
    return (
        <div>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card bg-info-subtle">
                            <div className="card-body">
                                <h1 className="card-text text-center">Get in Touch & Book Your Event!</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card bg-info-subtle">
                            <div className="card-body">
                                <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <h3 className="card-text">Book Your Event!</h3>
                                </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter name"/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control" placeholder="Enter email"/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Phone No.</label>
                                        <input type="text" className="form-control" placeholder="Enter phone no."/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Select the event</label>
                                        <select name="" id="" class="form-select">
                                            <option value="Select the event">Select the event</option>
                                            <option value="Wedding Ceremony">Wedding Ceremony</option>
                                            <option value="Birthday Party">Birthday Party</option>
                                            <option value="Corperate Event">Corperate Event</option>
                                            <option value="Music Concert">Music Concert</option>
                                            <option value="Annual Day">Annual Day</option>
                                            <option value="Outdoor Camp">Outdoor Camp</option>
                                            <option value="Engagement Party">Engagement Party</option>
                                            <option value="Theatre Performance">Theatre Performance</option>
                                            <option value="Holiday Party">Holiday Party</option>
                                            <option value="Festival Celebrations">Festival Celebrations</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Specify your event</label>
                                        <textarea name="" id="" className="form-control" placeholder="Type here... "></textarea>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success">Submit</button>
                                        <p>Our team will contact you shortly after you submit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="card bg-info-subtle">
                            <div className="card-body">
                                <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <h3 className="card-text">Your Question or Feedback</h3>
                                </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Your Question/Feedback</label>
                                        <textarea name="" id="" className="form-control"></textarea>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
