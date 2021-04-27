import React from 'react'
import './Nav.css';
import { Card } from '../src/Card';
import web from "../src/images/img-1.png";
import web1 from "../src/images/img-2.jpg";
import web6 from "../src/images/img-7.jpg";
import Sdata from '../src/Sdata';
import Count from '../src/Count';

export const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>Grow your Busniess with <br /><strong>Invictus Tech</strong></h1>
                                    <h2 className="my-3">
                                        We have a team that helps you to grow
                            </h2>
                                    <div className="mt-3">
                                        <button type="button" className="btn btn-info get">Get started</button>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} alt="head" className="img-fluid animated" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <div className="container-fluid nav-bg ">
                <div className="row">
                    <div className="col-10 mx-auto div-2">
                        <div className="row">
                            <h2 className="heading-2" style={{ color: "black" }}>From inception to completion & beyond</h2>
                            <h1 className="my-3" style={{ color: "teal" }}>Invictus Tech</h1>
                            <div className="col-lg-4 order-1 order-lg-1 img-2 ">
                                <img src={web1} alt="head" className="img-fluid" />

                            </div>
                            <div className="col-md-8 pt-5 pt-lg-0 order-2 order-lg-2">


                                <p className="img-2-text">Are you in need of developing Web & Mobile Applications for a frictionless
                                business experience or to augment your clientele? Oodles Technologies is a
                                one-stop destination for you. Watch your ideas materialize into tangible success
                                as we define your journey from Technologies to Solutions. At Oodles, we believe
                                in empowering developers and businesses, alike. Our trained experts help you with
                                cost-effectiveweb and application development using leading-edge technologies
                                ranging from Blockchain, Artificial Intelligence, SaaS, Data Security, ERP,
                                Big Data to Video Streaming solutions, to create the perfect blend of
                                        functionality and integrated tech solutions for any industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="heading-2">
                            <h1>Our Services</h1>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {
                                Sdata.map((val, ind) => {
                                    return <Card
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        heading={val.heading}
                                        para={val.para}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid nav-bg ">
                <div className="row">
                    <div className="col-10 mx-auto div-2">
                        <div className="row">
                            <h2 className="heading-2">Tech Stack</h2>
                            <div className="col-lg-4 order-1 order-lg-2  ">
                                <img src={web6} alt="head" className="img-fluid" />
                            </div>
                            <div className="col-md-8 pt-5 pt-lg-0 order-2 order-lg-1">
                                <p className="img-2-text">With over a decade long expertise in implementing winning technologies,
                                we empower our customers with robust and best-in-class, AI powered solutions, ERP solutions, Blockchain
                                development services, SaaS Applications, Big Data solutions, Online Video solutions.We bring our industry
                                knowledge and experience to help clients ingrain the new and evolving technology solutions into their
                                business to stay ahead of the curve.
                                Oodles envisions to become a go-to technology / platform provider that provides technologies of tomorrow, today. Ready to #bethenext?
                               </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid  ">
                <div className="row">
                    <div className="col-12 mx-auto counters container-fluid ">
                        <div className="row">
                    <div className="count col-10 mx-auto  ">
                        <div className="parameters">
                            <h3> Projects</h3>
                            <p id="count-1" className="counter">1</p>
                        </div>
                        <div className="parameters">
                            <h3> Happy Clients</h3>
                            <p id="count-2" className="counter">1</p>
                        </div>
                        
                        <div className="parameters">
                            <h3>Countries Served</h3>
                            <p id="count-3" className="counter">1</p>
                        </div>
                        <div className="parameters">
                            <h3>Year's of Experience</h3>
                            <p id="count-4" className="counter">1</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

