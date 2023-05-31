import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="about-area page-section scroll-to-page" id="about">
        <div className="custom-container">
            <div className="about-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="lar la-user"></i> About
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Every great coding begin with<br/>
                        an even <span>better story</span></h1>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>I caught fire coding.🔥<br/><br/>

                    I constantly yearned to learn more and desired to do something different. and that’s when it happened; the spark I was missing ignited the instant I clicked play on my first Python tutorial video. Since I can’t get enough. Full Stack Development calls to all my passions. It incorporates creativity and problem solving and I’m allowed to break it to improve code.<br/><br/>

                    I’m moldable, but I still keep my creative flare intact.<br/> <br/>

                    My speciality includes quickly learning new skills and programming languages, Responsive Design Principles, Optimization, MVVM, and MVC structures for organizing code. So far I have Javascript, Python, Typescript, HTML, CSS, React, React Native, Node JS, Flask, Angular, Django, SQL, Jenkins, Docker, Agile and Git/Github under my belt. I’m still enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate into the coding web into my head.</p>
            </div>
        </div>
    </section>
  )
}
