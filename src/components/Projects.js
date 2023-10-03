// src/components/Banner.js
import React from 'react';
import Calculator from '../assets/images/calculator-project.png';
import Odyssey from '../assets/images/employee-odyssey-project.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    return(
        <div className="projects-section debug">
            <h1 className="section-h1 text-start project-title-section causten-bold text-green debug">Personal Projects</h1>
            <div className="debug">
                <div className="project-cont">
                    <div className="project-img-cont">
                        <img className="project-img" src={Odyssey} alt="Employee Odyssey"/>
                        <div className="project-img-after"></div>
                    </div>
                    <div className="text-white">
                        <h1 className="project-title causten-bold cursor-default">
                            <div className="text-cont">
                                <div className="hidden-cont">
                                    Employee Odyssey
                                </div>
                            </div>
                        </h1>
                        <p className="project-para causten-light cursor-default text-offwhite">
                            A comprehensive platform for managing various employee data, including Projects, Leave Requests, Leave Allocations, Time Off, and Personal Information.
                        </p>
                        <div>
                            <div className="project-badge-row">
                                <span className="badge background-green causten-bold language-badge">C#</span>
                                <span className="badge background-green causten-bold language-badge ms-2">ASP.NET</span>
                                <span className="badge background-green causten-bold language-badge ms-2">SQL</span>
                                <span className="badge background-green causten-bold language-badge ms-2">Bootstrap</span>
                            </div>
                        </div>
                        <div className="project-button-row">
                            <div>
                                <a class="icon2" href="https://github.com/perezryan26/CustomerRelationsManagementNet7">
                                    <FontAwesomeIcon icon={faGithub} class="project-icon text-offwhite" />
                                </a>
                            </div>
                            <div className="ps-4">
                                <a href="https://customerrelationsmanagementweb20230920225227.azurewebsites.net/">
                                    <FontAwesomeIcon icon={faCircleArrowRight} class="project-icon text-offwhite" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="project-cont-reverse">
                <div className="text-white">
                        <h1 className="project-title causten-bold cursor-default">
                            <div className="text-cont-reverse">
                                <div className="hidden-cont">
                                    Calculator
                                </div>
                            </div>
                        </h1>
                        <p className="project-para-reverse causten-light cursor-default text-offwhite">An intuitive calculator app, taking inspiration from the iPhone's calculator application.
                        </p>
                        <div>
                            <div className="project-badge-row-reverse">
                                <span className="badge background-green causten-bold language-badge">REACT</span>
                                <span className="badge background-green causten-bold language-badge ms-2">HTML</span>
                                <span className="badge background-green causten-bold language-badge ms-2">CSS</span>
                            </div>
                        </div>
                        <div className="project-button-row-reverse">
                            <div>
                                <a class="icon2" href="https://github.com/perezryan26/reactcalculatorwebapp">
                                    <FontAwesomeIcon icon={faGithub} class="project-icon text-offwhite" />
                                </a>
                            </div>
                            <div className="ps-4">
                                <a href="https://ryan-perez-calculator.netlify.app/"> 
                                    <FontAwesomeIcon icon={faCircleArrowRight} class="project-icon text-offwhite" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-img-cont">
                        <img className="project-img" src={Calculator} alt="Employee Odyssey"/>
                        <div className="project-img-after"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;