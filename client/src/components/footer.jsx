import React,{useRef,useEffect} from 'react';
import $ from 'jquery'
import {TimelineLite ,TweenMax, Power3} from 'gsap';

Footer.propTypes = {
    
};

function Footer(props) {
    let footer = useRef(null)
    let link1 = useRef(null)
    let link2 = useRef(null)
    let link3 = useRef(null)

    useEffect(() => {
        TweenMax.to(footer,0,{visibility:'visible'})
        TweenMax.staggerFrom([link1,link2,link3],1,{opacity:0,x:-20,ease:Power3.easeOut},.8)

    }, [])

    return (
        <footer className="footer" ref={el => footer = el}>
                <div className="d-flex align-items-end justify-content-between">
                    <div className="footer-socials d-flex align-items-center flex-column">
                        <div className="footer-socials__facebook" ref={el => link1 = el}>
                            <a className="hover-cursor" href="#top">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </div>
                        <div className="footer-socials__instagram" ref={el => link2 = el}>
                            <a className="hover-cursor" href="#top">
                                <i className="fab fa-instagram-square"></i>
                            </a>
                        </div>
                        <div className="footer-socials__github" ref={el => link3 = el}>
                            <a className="hover-cursor" href="#top">
                                <i className="fab fa-github-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-year hover-text hover-cursor">@2021</div>
                </div>
        </footer>
    );
}

export default Footer;