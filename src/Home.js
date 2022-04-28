import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles/Home.css'
function Home() {
    const navigate = useNavigate()
    return (
        <div className='app'>
            <div className="content" id="home">


                {/* <!-- HEADER --> */}

                <div className="header">
                    <div className="header_left">
                        <div className="left_img">
                            <div className="imgg">
                                <img src="./src/images/herbal.png" />
                            </div>
                            <h2>Chinese Herbal Clinic</h2>
                        </div>
                    </div>
                    <div className="header_center">
                        <a id="anchor" href="#"><h2>Home</h2></a>
                        <a id="anchor" href="#about"><h2>About Clinic</h2></a>
                        <a id="anchor" href="#about"><h2>Services</h2></a>
                        <a id="anchor" href="#about"><h2>About Doctor</h2></a>
                        <a id="anchor" href="#about"><h2>Location</h2></a>
                    </div>
                    <div className="header_right">
                        <a href="./Book.html"><button>Book an Appointment</button></a>
                        <span className="icon"><i className="fa fa-home" aria-hidden="true"></i></span>
                        <span className="icon"><i className="fa fa-home" aria-hidden="true"></i></span>
                        <span className="icon"><i className="fa fa-home" aria-hidden="true"></i></span>
                    </div>

                </div>


                {/* <!-- PARALLAX */}
                <div className="parallax">
                    <div className="container wow fadeInLeft" style="z-index: 5;">
                        <div className="navigation">
                            <ul>
                                <li>
                                    <a href="home.html">
                                        <span className="icon"><i className="fa fa-home" aria-hidden="true"></i></span>
                                        <span className="title">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#about">
                                        <span className="icon"><i className="fa fa-address-card" aria-hidden="true"></i></span>
                                        <span className="title">About</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact">
                                        <span className="icon"><i className="fa fa-calendar-week"></i></span>
                                        <span className="title">Contact</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact">
                                        <span className="icon"><i className="fa  fa-street-view"></i></span>
                                        <span className="title">Directions</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#gallery">
                                        <span className="icon"><i className="fa fa-images"></i></span>
                                        <span className="title">Gallery</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="toggle"></div>
                    </div> 
                    
                    <div data-cycle="go" className="cycle slide wow fadeInRight" data-wow-delay="1s">
                        <div className="cycle-inner">
                            <div className="item st1 active">
                                <h1>Treatment type 1</h1>
                            </div>
                            <div className="item st2">
                                <h1>Treatment type 2</h1>
                            </div>
                            <div className="item st3">
                                <h1>Treatment type 3</h1>
                            </div>
                            <div className="item st4">
                                <h1>Treatment type 4</h1>
                            </div>
                        </div>
                    </div>
                    <div className="parallax_content wow fadeInUp" data-wow-delay="0.8s">
                        <h1>Chinese Herbal clinic</h1>
                        <button className="hvr-curl-top-left">Services</button>
                        <a href="#about"> <img src="./src/images/herbal.png" alt="down" height="40px" width="40px"/> </a>
                    </div>
                </div>


                {/* <!-- ABOUT US --> */}
                <div className="aboutUs" id="about">
                    <div className="heading wow fadeInLeft">
                        <h1>Something <span>About</span></h1>
                        <h1>Us</h1>
                    </div>
                    <div className="about wow fadeInRight">
                        <ul>
                            <li>Key points of the clinic. </li>
                            <li>point 2</li>
                        </ul>


                        <a href="./HTML/about.html"><h4>View More</h4></a>
                    </div>
                </div>


                {/* <!-- THE STORY --> */}

                <div className="story">
                    <div className="story_upper">
                        <div className="story_icon wow heartBeat">
                            <div className="rectangle"></div>
                            <div className="rectangle"></div>
                            <div className="rectangle"></div>
                            <div className="line"></div>
                        </div>
                        <div className="story_heading">
                            <h1>Our Services</h1>
                        </div>
                    </div>
                    <div className="story_lower">

                        <div className="story_lowerLow">

                            <div className="story_box" >
                                <div className=" story_box1 glow" data-wow-delay="0.1s">
                                    {/* <!-- <h2>Read More</h2> --> */}
                                    <img src="./src/images/image 1.jpg" alt="back" height="200px" width="100%"/>
                                        <h3>treatment 1 </h3>
                                        <h1>About?</h1>
                                        <p>We are experts in providing treatment 1 . </p>
                                        <a href="./Book.html"><button>Book an Appointment</button></a>
                                </div>
                            </div>
                            <div className="story_box" >
                                <div className=" story_box1 glow " data-wow-delay="0.2s">
                                    {/* <!-- <h2>Read More</h2> --> */}
                                    <img src="./src/images/image 2.jpg" alt="back" height="200px" width="100%"/>
                                        <h3>treatment 2 </h3>
                                        <h1>About?</h1>
                                        <p>We are experts in providing treatment  2 accurately  </p>
                                        <a href="./Book.html"><button>Book an Appointment</button></a>
                                </div>
                            </div>
                            <div className="story_box" >
                                <div className=" story_box1 glow " data-wow-delay="0.3s">
                                    {/* <!-- <h2>Read More</h2> --> */}
                                    <img src="./src/images/image 3.jpg" alt="back" height="200px" width="100%"/>
                                        <h3>treatment iii </h3>
                                        <h1>About?</h1>
                                        <p>We are experts in providing treatment 3</p>
                                        <a href="./Book.html"><button>Book an Appointment</button></a>
                                </div>
                            </div>
                            <div className="story_box" >
                                <div className=" story_box1 glow " data-wow-delay="0.4s">
                                    {/* <!-- <h2>Read More</h2> --> */}
                                    <img src="./src/images/image 4.jpg" alt="back" height="200px" width="100%"/>
                                        <h3>treatment 4</h3>
                                        <h1>About?</h1>
                                        <p>We are experts in providing treatment 4 </p>
                                        <a href="./Book.html"><button>Book an Appointment</button></a>
                                </div>
                            </div>
                            <div className="story_box" >
                                <div className=" story_box1 glow " data-wow-delay="0.4s">
                                    {/* <!-- <h2>Read More</h2> --> */}
                                    <img src="./src/images/image 5.jpg" alt="back" height="200px" width="100%"/>
                                        <h3>treatment 5 </h3>
                                        <h1>About?</h1>
                                        <p>We are experts in providing treatment 5</p>
                                        <a href="./Book.html"><button>Book an Appointment</button></a>
                                </div>
                            </div>
                            <div className="story_box" >
                                <div className=" story_box1 glow " data-wow-delay="0.4s">
                                    {/* <!-- <h2>Read More</h2> --> */}
                                    <img src="./src/images/image 5.jpg" alt="back" height="200px" width="100%"/>
                                        <h3> treatment 6 </h3>
                                        <h1>About?</h1>
                                        <p>We are experts in providing treatment 6</p>
                                        <a href="./Book.html"><button>Book an Appointment</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- SLIDER --> */}
                <div className="slider">
                    <div className="slider_left wow fadeInLeft" data-wow-delay="0.6s">
                        <h1>About Doctor<span> Experience</span></h1>
                        <p>The life saver</p>
                        <ul>
                            <li> Get best treatment
                            </li>
                            <li>Best in the city
                            </li>
                            <li> At reasonable charges
                            </li>
                        </ul>
                        <button>Read More</button>
                    </div>
                    <div data-cycle="go" className="cycle slide wow fadeInRight" align="right" data-wow-delay="1s">
                        <div className="cycle-inner">
                            <div className="item">
                                <img src="./src/images/image 6.jpg" height="325" width="550"/>
                            </div>
                            <div className="item">
                                <img src="./src/images/image 5.jpg" height="325" width="550"/>
                            </div>
                            <div className="item">
                                <img src="./src/images/image 4.jpg" height="325" width="550"/>
                            </div>
                            <div className="item">
                                <img src="./src/images/image 3.jpg" height="325" width="550"/>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- PRIVATE EVENT --> */}
                <div className="contact_body" id="contact">
                    <div className="contact_bodyLeft">
                        <h1>How to reach us</h1>
                        <div className="privateEvent_book">
                            <div className="privateEvent_BookInputs">
                                <table className="table">
                                    <tr>
                                        <td><input className="inp" type="text" placeholder="FIRST NAME"/></td>
                                        <td colspan="2"><input className="inp" type="text" placeholder="LAST NAME"/></td>
                                    </tr>
                                    <tr>
                                        <td><input className="inp" type="text" placeholder="CITY"/></td>
                                        <td>
                                            <select className="inpt">
                                                <option>STATE</option>
                                                <option>MELBOURNE</option>
                                                <option>SYDNEY</option>
                                                <option>UP</option>
                                                <option>BIHAR</option>
                                                <option>Mirzapur</option>
                                            </select>
                                        </td>
                                        <td><input className="inp" type="text" placeholder="ZIP"/></td>
                                    </tr>
                                    <tr>
                                        <td colspan="3"><input className="inp" type="text" placeholder="EMAIL"/></td>
                                    </tr>
                                    <td><textarea className="ta" name="" id="" cols="50" rows="10" placeholder="Message"></textarea></td>
                                </table>
                                <div className="checkbox">
                                    <input type="checkbox" name="select" id="select"/>
                                        <label className="label" for="select">Yes,please notify me with updates regarding new events!</label>
                                </div>
                                <div className="buttons">
                                    <button type="submit">SUBMIT</button>
                                    <button type="reset">RESET</button>
                                </div>
                            </div>

                        </div></div>
                    <div className="contact_bodyRight"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2211.9117730138573!2d145.08882040436742!3d-37.87469010336419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66bc5d2d17925%3A0x809ed8898f5797bb!2sHolmesglen%20NEIS!5e0!3m2!1sen!2sin!4v1648988113588!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>

            </div>
            </div>
            )
}
export default Home