import React from 'react';
import JoinSection from '../HomePage/JoinSection';

let videoone = "assets/videos/3D Digital Billboard Advertising.mp4";
let video2 = "assets/videos/Adidas Lipton Nissan Bento.mp4";
let video3 = "assets/videos/INSTALLATION REEL.mp4";

const Advertising = () => {
    return (
        <>
            <div className="herosection">
                <video className="background-video" autoPlay loop muted>
                    <source src={videoone} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-content hideInMobile">
                    <h1>Prepare yourself for an enchanting encounter.</h1>
                    <p>Creating the illusion of depth through immersive 3D visuals will uplift the brand and spellbind the audience with hypnotic graphics.</p>
                    <a href="#join">
                        <button className='mainbutton'>GET STARTED</button>
                    </a>
                </div>
            </div>
            <div className='container mt-3'>
                <div className="row">
                    <div className="mobile-content hideInDesktop">
                        <h1>Prepare yourself for an enchanting encounter.</h1>
                        <p>Creating the illusion of depth through immersive 3D visuals will uplift the brand and spellbind the audience with hypnotic graphics.</p>
                        <a href="#join">
                            <button className='mainbutton'>GET STARTED</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container my-md-5 py-md-5 my-3 text-white adsection">
                <div className="row">
                    <div className='text-center my-3'>
                        <h2 className='text-white'>ANAMORPHIC</h2>
                        <p className=''>Creates unbelievably DYNAMIC STORIES that can go VIRAL organically. Curved Led simply adds to the MAGIC !</p>
                        <p className=''>
                            Bringing your imagination to life and making people see realistic 3D visuals that will wow the onlooker. That is exactly how anamorphic displays work. They are massive displays that display realistic 3D content that becomes larger than life in order to capture the audience's attention.
                        </p>
                    </div>
                    <div className='text-center my-3'>
                        <h3>Why are brands moving to Anamorphic</h3>
                        <p className=''>Having a generic video commercial and airing it on social media is becoming obsolete, but what stands out is going directly to the consumer and presenting your brand and creativity, making a direct impression in the minds of the consumer and also making their record and keeping it in their memory. That is the reason many brands are looking forward to something not so generic.
                        </p>
                    </div>
                    <div className='text-center my-3'>
                        <h3>Features</h3>
                        <p className=''>Anamorphic has the ability to showcase hyper-realistic content to the viewer which would make them feel they are coming right at them. It enables crisp content with high precision and having a curved LED screen would completely be mesmeric to the eyes of the onlooker. One can buy the anamorphic LEDs and keep changing the content as per their requirements and stand out in every campaign
                        </p>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-md-6">
                        <div>
                            <h3>How will I measure the success of my 3D billboard campaign?</h3>
                            <div>It's incredibly simple.</div>
                            <p>
                                The success of any OOH campaign banks strongly on the creative and the location of the site. However , with the advent of DOOH and programmatic OOH , the location does not hold a lot of importance as the PR factor comes into play and helps amplify the reach to a much larger extent digitally through social media. A 3D anamorphic billboard is another category which has been trending for the last year or so and is here to stay
                            </p>
                            <button className='mainbutton'>Feeling Unsure</button>
                        </div>
                    </div>
                    <div className="col-md-6 p-3">
                        <div>
                            {/* <img src={img1} alt="banner1" className='img-fluid' /> */}
                            <video className="videobanner" autoPlay loop muted>
                                <source src={video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 p-3 px-md-5">
                        <div className='text-center'>
                            <h3>How do 3D billboards adapt to different weather conditions and outdoor elements, and what maintenance is required to keep them in top shape?</h3>

                            <p>
                                Anamorphic billboards employ high-end LED technology, with an exceptionally fine pixel pitch that can be as low as 0.9 in specific instances. Maintaining this advanced technology can be quite demanding due to the need for robust protection against all types of weather conditions. As a result, a high IP (Ingress Protection) rating becomes the primary choice when it comes to selecting LEDs for anamorphic billboards.
                            </p>

                        </div>
                    </div>
                    <div className="col-12 p-3 px-md-5">
                        <div>
                            {/* <img src={img1} alt="banner1" className='img-fluid' /> */}
                            <video className="rounded-5 videobanner" width={1200} autoPlay loop muted>
                                <source src={video3} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className='text-center'>
                        <h1 >Don't Just Advertise, Dominate the Streetscape!</h1>
                        <p>See Your Brand Leap Off the Billboard with 3D. to get a free mockup of your next campaign!
                        </p>
                    </div>

                </div>
            </div>



            <div id='join'>
                <JoinSection />
            </div>
        </>
    );
};

export default Advertising;
