import React,{useRef,useEffect} from 'react';
import gsap from 'gsap'
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import { Link, NavLink, useHistory } from 'react-router-dom';

Home.propTypes = {
    
};

function Home(props) {
    
    let width = window.innerWidth;
    let tl = gsap.timeline({default:{ease: "SlowMo.easeOut"}})

    let textHome = useRef(null)
    let content = useRef(null)

    

    function handleMouseMove(e) {
        const spansSlow = document.querySelectorAll('.spanSlow');
        const spansFast = document.querySelectorAll('.spanFast');
        let normalizedPosition = e.pageX / (width/2) - 1;
        let speedSlow = 15 * normalizedPosition;
        let speedFast = 20 * normalizedPosition;
        spansSlow.forEach((span) => {
            span.style.transform = `translate(${speedSlow}px)`;
        });
        spansFast.forEach((span) => {
            span.style.transform = `translate(${speedFast}px)`
        })
        
    }
    window.addEventListener('mousemove', handleMouseMove);
    useEffect(() => {
        TweenMax.to(textHome,1,{opacity:'1'})
        TweenMax.from(content,3,{opacity:0,y:100,ease:Power3.easeOut},2)
    }, [])
    return (
        <section className="home section d-flex justify-content-between align-items-center" id="home" ref={el => textHome = el}>
            <div className="home-text text-center" ref={el => content = el}>
                <h2 className="d-flex flex-column">
                    <Link className="spanFast hover-cursor" to="/about">
                        CLICK TO
                    </Link>
                    <Link className="spanSlow hover-cursor" to="/about">
                        VIEW INFOMATION
                    </Link>
                    <Link className="spanFast hover-cursor" to="/about">
                        ABOUT ME
                    </Link>
                </h2>
            </div>
         </section>
    );
}

export default Home;