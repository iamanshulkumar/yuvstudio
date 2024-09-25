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
                <div className="row py-3 py-md-5">
                    <div className="col-md-6">
                        <div className=' my-3'>
                            <h2 className='text-white'>ANAMORPHIC</h2>
                            <p className=''>
                                Creates dynamic, captivating stories with the potential to go viral organically. The curved LED screen adds an extra layer of magic!
                            </p>
                            <p className=''>
                                Anamorphic displays bring your imagination to life, showcasing stunning 3D visuals that leave onlookers in awe. These massive screens project hyper-realistic content that appears larger than life, effortlessly capturing and holding the audience’s attention.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="https://frankfurt.apollo.olxcdn.com/v1/files/c2ofhxhsnvz3-UZ/image;s=1000x700" alt="img" className='img-fluid rounded' />
                    </div>
                    <div className="row py-5">
                        <div className="col-md-6">
                            <img src="https://www.groovejones.com/_next/image?url=https%3A%2F%2Fwebhost.groovejones.com%2Fwp-content%2Fuploads%2F2023%2F08%2F3d_billboards.jpg&w=1080&q=75" alt="img" className='img-fluid rounded' />
                        </div>
                        <div className="col-md-6">
                            <div className=' my-3'>
                                <h3>Why are brands moving to Anamorphic?</h3>
                                <p className=''>
                                    Traditional video commercials on social media are becoming less effective. What truly makes an impact now is engaging consumers directly with innovative and memorable experiences. Anamorphic displays allow brands to showcase their creativity in a way that leaves a lasting impression in the minds of their audience. This is why more and more brands are seeking out unique, non-generic solutions to stand out and stay memorable.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="row py-3 py-md-5">
                        <div className="col-md-6">
                            <div className=' my-3'>
                                <h3>Features</h3>
                                <p className=''>
                                    Anamorphic displays have the power to showcase hyper-realistic content, giving viewers the feeling that the visuals are coming right at them. With sharp, precise imagery and the added allure of a curved LED screen, the experience is mesmerizing for onlookers. These displays offer flexibility, allowing you to update and customize content to fit your campaign needs, ensuring your brand stands out every time.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="https://creativereview.imgix.net/content/uploads/2023/05/Call-of-Duty.png" alt="img" className='img-fluid rounded' />
                        </div>
                    </div>
                </div>

                <div className="row py-3 py-md-5">
                    <div className="col-md-6">
                        <div>
                            <h3>How will I measure the success of my 3D billboard campaign?</h3>
                            <div>It's quite simple.</div>
                            <p>
                                The success of any OOH campaign heavily relies on the creativity and the location of the display. However, with the rise of DOOH and programmatic OOH, location has become less crucial. Instead, the PR impact amplifies the reach, especially through social media. 3D anamorphic billboards have emerged as a trending category in the past year and are proving to be a lasting and powerful tool for brands.
                            </p>
                            <a href="/contact">
                                <button className='mainbutton'>Feeling Unsure</button>
                            </a>
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
                                Anamorphic billboards utilize cutting-edge LED technology, featuring an exceptionally fine pixel pitch that can be as low as 0.9 in certain cases. However, maintaining this advanced technology can be quite challenging, as it requires strong protection against various weather conditions. Therefore, selecting LEDs with a high Ingress Protection (IP) rating is essential to ensure durability and performance for anamorphic billboards in outdoor environments.
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
