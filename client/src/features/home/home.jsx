import React,{useRef,useEffect} from 'react';
import gsap from 'gsap'
import {TimelineLite ,TweenMax, Power3} from 'gsap';

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
        TweenMax.to(textHome,0,{visibility:'visible'})
        TweenMax.from(content,1,{opacity:0,y:100,ease:Power3.easeOut},2)
    }, [])
    return (
        <section className="home section d-flex justify-content-between align-items-center" id="home" ref={el => textHome = el}>
            <div className="home-text text-center" ref={el => content = el}>
                <h2 className="d-flex flex-column">
                    <a className="spanFast hover-cursor" href="#top">
                        CLICK TO
                    </a>
                    <a className="spanSlow hover-cursor" href="#top">
                        VIEW INFOMATION
                    </a>
                    <a className="spanFast hover-cursor" href="#top">
                        ABOUT ME
                    </a>
                </h2>
            </div>
         </section>
    );
}

export default Home;