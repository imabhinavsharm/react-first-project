import { Card } from '../src/Card';
import React from 'react'
import Sdata from '../src/Sdata';
import Sdata2 from '../src/Sdata2';
import web9 from '../src/images/img-9.jpg';
export const Service = () => {
    return (
        <>

        <div className="container-fluid nav-bg ">
        <div className="row">
            <div className="col-10 mx-auto div-2">
                <div className="row">
                  
                <div className="heading-2">
                            <h1>Our Services</h1>
                        </div>
                    <div className="col-lg-4 order-1 order-lg-1 img-2 ">
                        <img src={web9} alt="head" className="img-fluid" />

                    </div>
                    <div className="col-md-8 pt-5 pt-lg-0 order-2 order-lg-2">


                    <h2 className="heading-2" style={{ color: "teal" }}>A decade of solving <br/>real business
                        challenges with technologies</h2>
                        <p>It is all about our Approach! We breathe life into your dream projects using our knowledge and expertise. Every step we take is logically, financially and aesthetically scrutinized, analyzed and reanalyzed. All the while keeping the best interests of your business in mind. That’s why, we have a detailed approach using agile development methodology, a Work Breakdown Structure and a hierarchical and incremental</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    

        <div className="container-fluid nav-bg" style={{marginTop:"50px"}}>
                <div className="row">
                    <div className="col-10 mx-auto">
                        
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
            <div className="container-fluid nav-bg" style={{marginTop:"50px"}}>
                <div className="row">
                    <div className="col-10 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {
                                Sdata2.map((val, ind) => {
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
            </>
    )
}
