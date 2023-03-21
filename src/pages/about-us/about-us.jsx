import "./about-us.scss";
import micheal from "../../assets/images/michael-scott.svg";
import beetsley from "../../assets/images/beetsley.svg";
import dwright from "../../assets/images/dwright.svg";
import logo from "../../assets/images/blodo-logo.svg";
import { useState } from "react";

const AboutUsPage = () => {
    // const { width } = useWindowDimensions();
    const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {
    //     if (width < 768) {
    //         setIsMobile(true);
    //     } else {
    //         setIsMobile(false);
    //     }
    // }, [width]);



    const openNav = () => {
        setIsMobile(true)
    }

    const closeNav = () => {
        setIsMobile(false)
    }

    return (
        <div>
            {
                isMobile === false &&
                <section className="d-flex fw-400 pad-xy-10 justify-content-between bg-green align-items-center">
                    <img src={logo} alt="Blodo" />
                    <div className="d-flex align-items-center font-16 gap-5 display-no">
                        <div className="fw-600 family-open-sans color-dblue">Product</div>
                        <div className="family-open-sans fw-600 color-dblue">Services</div>
                        <div className="family-open-sans fw-600 color-dblue">About</div>
                        <button className="btn-outline fw-700">login</button>
                    </div>
                    <div className="menu family-open-sans fw-600 color-dblue" onClick={openNav} >
                        <button className="btn-outline fw-700" type="">Menu</button>
                    </div>
                </section>
            }

            <section>
                {isMobile &&
                    <div className="overlay" id="mobile_menu">
                        <div className="close" onClick={closeNav}>&times;</div>
                        <div className="overlay_content">
                            <div className="family-open-sans fw-600 color-dblue mt-1" >Product</div>
                            <div className="family-open-sans fw-600 color-dblue mt-1" >Services</div>
                            <div className="family-open-sans fw-600 color-dblue mt-1" >About Us</div>
                            <button className="btn-outline fw-700 mt-1">login</button>
                        </div>
                    </div>}
            </section>



            <section className="d-flex fw-400 pad-x-10 justify-content-between bg-green align-items-center flex-direction-column-md">
                <div className="text-left text-center-md">
                    <div className="color-dblue font-20 family-open-sans">About</div>
                    <div className="font-48 family-manrope color-black">We love to make great things, things that matter.</div>
                </div>

                <div className="font-16 text-center-md text-left family-open-sans color-dblue">
                    Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
                </div>
            </section>

            <section className="text-center bg-white pad-x-15">
                <div className="fw-400 font-20 color-dblue family-open-sans mb-3">Our numbers</div>
                <div className="fw-400 font-48 color-dblue family-manrope">Handshake infographic mass market crowdfunding iteration.</div>
                <div className="d-flex justify-content-between fw-400 color-dblue mt-3 flex-direction-column-md">
                    <div className="text-left text-center-md">
                        <div className="font-96 family-manrope"> 120m</div>
                        <div className="family-open-sans font-24 mt-1">Cool feature title</div>
                    </div>
                    <div className="text-left text-center-md">
                        <div className="font-96 family-manrope"> 10.000</div>
                        <div className="family-open-sans font-24 mt-1">Cool feature title</div>
                    </div>
                    <div className="text-left text-center-md">
                        <div className="font-96 family-manrope"> 240</div>
                        <div className="family-open-sans font-24 mt-1">Cool feature title</div>
                    </div>
                </div>

            </section>

            <section className="bg-dblue text-left text-center-md fw-400 pad-x-20">
                <div className="font-20 color-white family-open-sans mb-3">Our story</div>
                <div className="font-48 color-white family-manrope ">Handshake infographic mass market crowdfunding iteration.</div>
                <div className="font-20 color-lgray family-open-sans mt-3">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </div>
            </section>

            <section className="pad-x-15 bg-white">
                <div className="text-left text-center-md fw-400 mx-5">
                    <div className="font-20 color-gray family-open-sans mb-2">Our team</div>
                    <div className="font-48 color-black family-manrope ">The people behind the work</div>
                    <div className="font-20 color-gray family-open-sans mt-1">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </div>
                </div>

                <div className="d-flex justify-content-between mt-3 flex-direction-column-md">
                    <div>
                        <img className="w-100" src={micheal} alt="Michael Scott" />
                        <div className="text-left text-center-md fw-400 mt-2">
                            <div className="font-28 color-black family-manrope">Michael Scott</div>
                            <div className="mt-1 font-20 color-gray family-open-sans">General Manager</div>
                        </div>
                    </div>
                    <div>
                        <img className="w-100" src={micheal} alt="Michael Scott" />
                        <div className="text-left text-center-md fw-400 mt-2">
                            <div className="font-28 color-black family-manrope">Michael Scott</div>
                            <div className="mt-1 font-20 color-gray family-open-sans">General Manager</div>
                        </div>
                    </div>
                    <div>
                        <img className="w-100" src={micheal} alt="Michael Scott" />
                        <div className="text-left text-center-md fw-400 mt-2">
                            <div className="font-28 color-black family-manrope">Michael Scott</div>
                            <div className="mt-1 font-20 color-gray family-open-sans">General Manager</div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 text-center-md">
                    <div className="d-flex justify-content-between flex-direction-column-md">
                        <div className="d-flex align-items-center mt-sm-2">
                            <img src={dwright} alt="Beetsley" className="mr-2 mr-sm-2" />
                            <div className="fw-400 text-center-md">
                                <div className="text-left  mt-2">Dwight Schrute</div>
                                <div className="mt-1 font-20 color-gray family-open-sans">General Manager</div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-sm-2">
                            <img src={beetsley} alt="Beetsley" className="mr-2 mr-sm-2" />
                            <div className="fw-400 text-center-md">
                                <div className="text-left  mt-2">Pam Beetsley</div>
                                <div className="mt-1 font-20 color-gray family-open-sans">General Manager</div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mt-2 flex-direction-column-md">
                        <div className="d-flex align-items-center mt-sm-2">
                            <img src={beetsley} alt="Beetsley" className="mr-2 mr-sm-2" />
                            <div className="fw-400 text-center-md">
                                <div className="text-left  mt-2">Pam Beetsley</div>
                                <div className="mt-1 font-20 color-gray family-open-sans">General Manager</div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-sm-2">
                            <img src={beetsley} alt="Beetsley" className="mr-2 mr-sm-2" />
                            <div className="fw-400 text-center-md">
                                <div className="text-left  mt-2">Pam Beetsley</div>
                                <div className="mt-1 font-20 color-gray family-open-sans">General Manager</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pad-x-12 bg-dblue">
                <div className="fw-400 color-white">
                    <div className="font-20 family-open-sans mb-3">Our numbers</div>
                    <div className="font-48 family-manrope">Handshake infographic mass market crowdfunding iteration.</div>
                </div>
                <hr />
                <div className="text-left mt-3">
                    <div className="d-flex justify-content-between flex-direction-column-md align-item-start w-100">
                        <div className="font-48 fw-400 color-white family-manrope w-50">We are <span className="color-green">commited.</span></div>
                        <div className="font-20 fw-400 color-lgray family-open-sans w-50">Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </div>
                    </div>

                    <div className="d-flex justify-content-between flex-direction-column-md align-item-start mt-2 w-100">
                        <div className="font-48 fw-400 color-white family-manrope w-50">We are <span className="color-green">responsible.</span></div>
                        <div className="font-20 fw-400 color-lgray family-open-sans w-50">Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain. </div>
                    </div>

                    <div className="d-flex justify-content-between flex-direction-column-md align-item-start mt-2 w-100">
                        <div className="font-48 fw-400 color-white family-manrope w-50">We are <span className="color-green">progress.</span></div>
                        <div className="font-20 fw-400 color-lgray family-open-sans w-50">Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. </div>
                    </div>

                </div>
            </section>

            <section className="pad-x-12 bg-white">
                <div className="bg-dblue get-started text-center py-5">
                    <div className="fw-400 family-manrope font-48 color-white">An enterprise template to ramp up your company website</div>
                    <div className="d-flex justify-content-center flex-direction-column-md gap-3 mt-2">
                        <input type="text" className="form-control form-input-d fw-400 font-20" placeholder="Your email address" />
                        <button className="btn-green font-20 fw-700 color-dblue">Get Started</button>
                    </div>

                </div>
            </section>

            <section className="family-open-sans d-flex justify-content-between flex-direction-column-sm gap-3 pad-x-12 w-100">
                <div className="font-16 fw-400  text-left w-30">
                    <img src={logo} alt="bg" className="" />
                    <div className="mt-1 color-gray">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</div>
                    <div className="mt-3 color-gray">All rights reserved.</div>
                </div>

                <div className="font-20 text-left">
                    <div className="fw-700 color-black ">Landings</div>
                    <div className="fw-400 color-gray mt-1">Home </div>
                    <div className="fw-400 color-gray mt-1">Products</div>
                    <div className="fw-400 color-gray mt-1">Services</div>
                </div>

                <div className="font-20 text-left">
                    <div className="fw-700 color-black ">Company</div>
                    <div className="fw-400 color-gray mt-1">Home </div>
                    <div className="fw-400 color-gray mt-1">Careers <span className="font-13 fw-700 color-dblue bg-green p-2 ml-1 round-120">Hiring!</span></div>
                    <div className="fw-400 color-gray mt-1">Services</div>
                </div>

                <div className="font-20 text-left">
                    <div className="fw-700 color-black ">Resources</div>
                    <div className="fw-400 color-gray mt-1">Blog </div>
                    <div className="fw-400 color-gray mt-1">Products</div>
                    <div className="fw-400 color-gray mt-1">Services</div>
                </div>
            </section>
        </div>
    )
}

export default AboutUsPage;