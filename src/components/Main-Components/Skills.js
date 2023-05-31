import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-shapes"></i> my skills
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>My <span>Advantages</span></h1>
                    </div>
                    <div className="row skills text-center">
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/react.png" alt="React"/>
                                    <h1 className="percent">90%</h1>
                                </div>
                                <p className="name">React</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/angular.png" alt="React"/>
                                    <h1 className="percent">60%</h1>
                                </div>
                                <p className="name">Angular</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/flask.png" alt="React"/>
                                    <h1 className="percent">70%</h1>
                                </div>
                                <p className="name">Flask</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/nodejs.png" alt="React"/>
                                    <h1 className="percent">80%</h1>
                                </div>
                                <p className="name">Node JS</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/docker.png" alt="React"/>
                                    <h1 className="percent">60%</h1>
                                </div>
                                <p className="name">Docker</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-left'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="../assets/images/jenkins.png" alt="React"/>
                                    <h1 className="percent">60%</h1>
                                </div>
                                <p className="name">Jenkins</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
    </section>
  )
}
