import React,{useEffect,useRef} from 'react';
import {TweenMax, Power3 , gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

AboutMe.propTypes = {
    
};

function AboutMe(props) {

    let about = useRef(null)
    
    useEffect(() => {
        const boxes = document.querySelectorAll('.about-div');
    
        boxes.forEach((box, i) => {
            gsap.from(box, {
                duration: 3,
                y: '100',
                opacity: 0,
                ease: 'ease-in',
                scrollTrigger: {
                  trigger: box,
                  start: 'top 70%',
                  end: 'bottom 40%',
                  toggleActions: 'play none none none',
                  //options: play, pause, resume, reset, restart, complete, reverse,none
                },
              });
        });
        TweenMax.to(about,1,{opacity:1})
    }, [])
    return (
        <section className="about section" id="about" ref={el => about = el}>
            <div className="container">
                <div className="about__title hover-cursor">
                    <h2 className="hover-cursor">ABOUT ME</h2>
                </div>
                <div className="about-info">
                    <div className="about-info__hello">
                        <p className="hover-cursor">Hello,</p>
                        <h3><p className="hover-cursor">I am VU QUANG HUY - Web Developer</p></h3>
                    </div>
                    <div className="about-info__content">
                        <h3><p className="hover-cursor">My name is Huy, a student at Posts and Telecommunications Institute of Technology (PTIT), major in Information Technology. 
                            I always want to learn more from experience and use my creativity to create good products. And I want to be a professional Web developer.
                            <br></br>Thank you for reading .</p></h3>
                    </div>
                    <a href="">
                        <div className="about-info__button hover-cursor">
                            <i className="fas fa-download"></i>
                            Download CV
                        </div>
                    </a>

                </div>
                <div className="about-div about-skills">
                    <div className="title-about about-skills__title">
                        <h2 className="hover-cursor">SKILLS</h2>
                    </div>
                    <div className="about-content about-skill">
                        <h3><p>Front-end : HTML / CSS / SCSS / JAVASCRIPT .</p></h3>
                        <h3><p>Framework/Library : BOOTSTRAP / TAILWIND CSS / JQUERY / REACT JS .</p></h3>
                        <h3><p>UI Design : ADOBE XD / PHOTOSHOP / IIIUSTRATOR .</p></h3>
                        <h3><p>Other : NODE JS / GIT / LINUX / NETWORKING / ... .</p></h3>
                    </div>

                </div>
                <div className="about-div about-products">
                    <div className="title-about about-products__title">
                        <h2 className="hover-cursor">PRODUCT</h2>
                    </div>
                    <div className="about-content about-product">
                        <p>Please click on the PRODUCT in the top right corner .</p>
                    </div>
                </div>
                <div className="about-div about-experiences">
                    <div className="title-about about-experiences__title">
                        <h2 className="hover-cursor">EXPERIENCE</h2>
                    </div>
                    <div className="about-content about-experience">

                    </div>
                </div>
                <div className="about-div about-contacts">
                    <div className="title-about about-contacts__title">
                        <h2 className="hover-cursor">CONTACT</h2>
                    </div>
                    <div className="about-content about-product">
                        <h3><p>SDT : <a className="hover-text hover-cursor" href="tel:0358839559">0358839559</a> .</p></h3>
                        <h3><p>ANDRESS : HaNoi - VietNam .</p></h3>
                        <h3><p>EMAIL : <a className="hover-text hover-cursor" href="mailto:vuquanghuy978@gmail.com">vuquanghuy978@gmail.com</a> .</p></h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;