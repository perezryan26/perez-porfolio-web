// src/components/Banner.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    return(
        <div className="skills-section">
            <h1 className="section-h1 text-start project-title-section causten-bold debug text-green">Skills</h1>
            <div className="container position-relative">
            <div class="row d-flex flex-wrap step-row">
                <div class="ps-0 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center skill-card">
                    <div class="card bg-transparent h-100">
                        <div class="card-body">
                            <div class="skill-icon text-white mx-auto rounded-circle d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faLaptopCode}/></div>
                            <h3 class="mt-4 text-white project-skill-title">Front-End</h3>
                            <p class=" mt-3 mb-0 fw-500 text-offwhite causten-reg project-skill-para">HTML</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">CSS</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">JavaScript</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">Bootstrap</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">React</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">TailwindCss</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">jQuery</p>
                        </div>
                    </div>
                </div>
                <div class=" ps-0 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center skill-card">
                    <div class="card bg-transparent h-100">
                        <div class="card-body">
                            <div class="skill-icon text-white mx-auto rounded-circle d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faCircleNodes} /></div>
                            <h3 class=" mt-4 text-white project-skill-title">Back-End</h3>
                            <p class=" mt-3 mb-0 fw-500 text-offwhite causten-reg project-skill-para">C#</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">ASP.Net</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">MySQL</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">Java</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">MongoDb</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">NodeJS</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">Firebase</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">Restful APIs</p>
                        </div>
                    </div>
                </div>
                <div class="ps-0 col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center skill-card">
                    <div class="card bg-transparent h-100">
                        <div class="card-body">
                            <div class="skill-icon text-white mx-auto rounded-circle d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faScrewdriverWrench} /></div>
                            <h3 class=" mt-4 text-white project-skill-title">Tools</h3>
                            <p class=" mt-3 mb-0 fw-500 text-offwhite causten-reg project-skill-para">Github</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">JUnit</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">MSTest</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">Figma</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">Visual Studio</p>
                            <p class=" mt-2 mb-0 fw-500 text-offwhite causten-reg project-skill-para">VS Code</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
        
    );
}

export default Banner;