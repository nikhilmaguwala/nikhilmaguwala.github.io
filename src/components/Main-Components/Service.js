import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="services-area page-section scroll-to-page" id="services">
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-stream"></i> Services
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>My <span>Specializations</span></h1>
                </div>

                <div className="services-items">
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-code"></i>
                        <h2>Frontend Developing</h2>
                        <p>I created Web apps and Software in React & Angular</p>
                        <span className="projects">5 Projects</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-terminal"></i>
                        <h2>Backend Development</h2>
                        <p>I build powerful backends using python-flask & Node JS</p>
                        <span className="projects">6 Projects</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-mobile"></i>
                        <h2>Application Development</h2>
                        <p>I have worked on React Native Applications</p>
                        <span className="projects">5-6 Projects</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-server"></i>
                        <h2>Devops & Deployment</h2>
                        <p>I used Docker, Shell Scripts, Jenkins and AWS etc. for devops</p>
                        <span className="projects">5-6 Projects</span>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}
