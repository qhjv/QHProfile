import React from 'react';
import PropTypes from 'prop-types';

Home.propTypes = {
    
};

function Home(props) {
    
    let width = window.innerWidth;
    
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
    return (
        <section className="home section d-flex justify-content-between align-items-center" id="home">
            <div className="home-text text-center">
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