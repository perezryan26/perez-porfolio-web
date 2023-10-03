// src/components/Banner.js
import React from 'react';
import Headshot from '../assets/images/headshot.jpg';
import CodeIcon from '../assets/images/undraw_banner.svg';
import Resume from '../assets/Perez_Ryan_Resume.pdf';

function Banner() {
    return(
        <section className="banner-section debug">
            <div className ="banner d-flex flex-column debug">
                <div className="d-flex align-items-center justify-content-between mb-4 animate__animated animate__fadeIn animate__delay-05s">
                    <div className="width-fit">
                        <img src={Headshot} className="App-logo" alt="headshot" />
                    </div>
                
                    <div className="d-flex flex-column flex-md-row mb-2 mb-md-0">
                        <a className="btn button-secondary causten-bold project-button ms-3 mb-2 mb-md-0" href={Resume} target="_blank" rel="noreferrer">
                            <span>Resume</span>
                        </a>
                        <a className="btn button-secondary causten-bold project-button ms-3" href="mailto:perezryan26@gmail.com">
                            <span>Contact&nbsp;Me</span>
                            
                        </a>
                    </div>
                </div>
                <div className="debug banner-title">
                    <h1 className="banner-h1 text-xl-start d-md-block animate__animated animate__bounceInDown text-white">Hola! I'm <span className="text-green">Ryan</span></h1>
                    <h1 className="banner-h2 mb-2 text-xl-start d-md-block animate__animated animate__fadeIn animate__delay-05s text-white">Full-Stack Developer</h1>
                </div>
                
                <div className="debug row bio-row align-items-center justify-content-between">
                    <div className="debug col-md-6 bio-col banner-cont-p">
                        <span className="text-offwhite banner-p d-md-block causten-light animate__animated animate__fadeIn animate__delay-05s">
                            I'm a Software Engineer specializing in building robust and user-friendly Full-Stack applications. 
                            I excel in writing efficient code and finding innovative solutions to complex challenges. Beyond my professional endeavors, 
                            I enjoy staying active, reading thought-provoking literature, and cooking delicious foods.
                        </span>
                    </div>
                    <div className="debug col-md-6 bio-col text-right code-icon-div animate__animated animate__fadeIn animate__delay-05s">
                        <img src={CodeIcon} className="code-icon debug" alt="code moon icon"/>
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default Banner;