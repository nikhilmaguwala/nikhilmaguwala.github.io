import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Herosec() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="hero-section page-section scroll-to-page" id="home">
        <div className="custom-container">
            <div className="hero-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom" data-aos='fade-up'>
                        <i className="las la-home"></i> Introduce
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Say Hi from <span>Nikhil</span>, Full Stack Developer & Coding Mentor</h1>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>Nikhil Maguwala is a Full-Stack Developer with experience developing a website & Apps, Nikhil is fueled
                    by his passion for understanding Full-Stack development. He considers himself a ‘forever student. Nikhil
                    believes mindfulness in the workplace is key to success - a tenet he lives out through his interests in
                    yoga, and meditation. Also, Part-time coding tutor at 4Geeks Academy.
                </p>
                <a href="#portfolio" 
                    className="go-to-project-btn scroll-to scroll-animation" 
                     data-aos='fade-up'>
                    <img src="../assets/images/round-text.png" alt="Rounded Text"/>
                    <i className="las la-arrow-down"></i>
                </a>
                <div className="facts d-flex">
                    <div className="left scroll-animation" data-aos='fade-right'>
                        <h1>2+</h1>
                        <p>Years of <br/>Experience</p>
                    </div>
                    <div className="right scroll-animation" data-aos='fade-left'>
                        <h1>15+</h1>
                        <p>projects completed on <br/>2 countries</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
