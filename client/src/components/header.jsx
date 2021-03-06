import React,{useRef,useEffect} from 'react';
import logodark from '../asset/image/logo.png'
import logolight from '../asset/image/logo_light.png'
import $ from 'jquery'
import { TweenMax, Power3,gsap} from 'gsap';
import { Link } from 'react-router-dom';
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

Header.propTypes = {
    
};

function Header(props) {
    var logo = true
    var click = true
    let header = useRef(null)
    let logoImg = useRef(null)
    let logoText = useRef(null)

    const handleClickLogo = () => {
        if(click === true){
            click = false
            $('.header-logo__before').addClass('light-click');
            setTimeout(function(){
                $('body').toggleClass('light-theme');
                if(logo === true){
                    $(".arrowLight").addClass('arrowDark');
                    $(".header-logo__img img").attr("src",`${logolight}`);
                    logo = false
                }else if(logo === false){
                    $(".arrowLight").removeClass('arrowDark');
                    $(".header-logo__img img").attr("src",`${logodark}`);
                    logo = true
                }
                $('.header-logo__before').removeClass('light-click');
                TweenMax.staggerFrom([logoImg,logoText],.8,{opacity:0,y:20,ease:Power3.easeOut},.8)
                TweenMax.staggerFrom([".footer-socials__facebook",".footer-socials__instagram",".footer-socials__github"],.8,{opacity:0,x:-20,ease:Power3.easeOut},.8)
            }, 700);
            setTimeout(() => {
                click = true
            }, 3000);
        }
    }
    useEffect(() => {
        TweenMax.to(header,1,{visibility:'visible'});
        TweenMax.staggerFrom([logoImg,logoText],.8,{opacity:0,y:20,ease:Power3.easeOut},.8);
    }, [])
    const handleClickMenu = () => {
        $(".menu").addClass('menutranfrom');
        gsap.fromTo(".menu__close", {opacity: 0,y:-1000}, {opacity: 1,y:0, duration: 0.5});
        $(".header-logo").addClass("transform-left");
        $(".footer-socials").addClass("transform-left");
        $(".section").addClass("transform-left");
        $(".backgroundBlur").removeClass('hidden');
        $("body").addClass('overflow-hidden');
        $('.spanFast').addClass('no-trans');
        $('.spanSlow').addClass('no-trans');
    }
    return (
            <header className="header" id="header" ref={el => header = el}>
                <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="header-logo d-flex align-items-center hover-cursor">
                        <div className="header-logo__img" onClick={handleClickLogo} ref={el => logoImg = el}>
                            <div className="header-logo__before"></div>
                            <h1><img src={logodark} alt="qhjv portfolio"/></h1>
                        </div>
                        <div className="header-logo__text" ref={el => logoText = el}>
                            <Link className="hover-cursor hover-text hover-text-underlined" to="/">
                                H-JV
                            </Link>
                        </div>
                    </div>
                    <div className="header-project hover-text hover-cursor hover-text-underlined"
                        onClick={handleClickMenu}
                    >
                        PRODUCT
                    </div>
                </div>
            </header>
    );
}

export default Header;