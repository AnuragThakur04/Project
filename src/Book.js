import React from 'react'
import './assets/css/style.css'

function Book() {
    return (
        <div class="inner-layer">
            <div class="container">
                <div class="row no-margin">
                    <div class="col-sm-7">
                        <div class="content">
                            <h1>Book You Slot Now and Save your time</h1>
                            <p>Here we'll show welcome message and assurance of treatment of some positive words </p>
                            <h2>For Help Call : +91 their number</h2>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="form-data">
                            <div class="form-head">
                                <h2>Book Appointemnt</h2>
                            </div>
                            <div class="form-body">
                                <div class="row form-row">
                                    <input type="text" placeholder="Enter Full name" class="form-control" />
                                </div>
                                <div class="row form-row">
                                    <input type="text" placeholder="Enter Mobile Number" class="form-control" />
                                </div>
                                <div class="row form-row">
                                    <input type="text" placeholder="Enter Email Adreess" class="form-control" />
                                </div>
                                <div class="row form-row">
                                    <input id="dat" type="text" placeholder="Appointment Date" class="form-control" />
                                </div>

                                <h6>Address Details</h6>

                                <div class="row form-row">
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Enter Area" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Enter City" class="form-control" />
                                    </div>
                                </div>
                                <div class="row form-row">
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Enter State" class="form-control" />
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Postal Code" class="form-control" />
                                    </div>
                                </div>

                                <div class="row form-row">
                                    <button class="btn btn-success btn-appointment" data-toggle="modal" data-target="#myModal">
                                        Book Appointment
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        {/* <!-- <h4 class="modal-title ">Modal Header</h4> --> */}
                    </div>
                    <div class="modal-body">
                        <p class="offset-lg-4">Your Appointment has been booked.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book