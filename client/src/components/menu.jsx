import React from 'react';
import PropTypes from 'prop-types';
import product1 from '../asset/image/products/1.jpg'
import arrowLight from '../asset/image/icons/arrow-light.png'
import arrowdark from '../asset/image/icons/arrow-dark.png'
import $ from 'jquery'

Menu.propTypes = {
    
};

function Menu(props) {
        
    const handleClickCloseMenu = () => {
        $(".header-logo").removeClass("transform-left");
        $(".footer-socials").removeClass("transform-left");
        $("#home").removeClass("transform-left");
        $(".backgroundBlur").addClass('hidden');
        $(".menu").removeClass('menutranfrom');
        $("body").removeClass('overflow-hidden');
        $('.spanFast').removeClass('no-trans');
        $('.spanSlow').removeClass('no-trans');
    }
    // let current = 0,
    //   target = 0, 
    //   ease = 0.01;
  
    //   window.addEventListener('load',() => {
    //     let windowWidth , containerHeight , imageHeight , skewDiff;
    //     let container = document.querySelector('.menuProducts');
    //     let images = Array.from(document.querySelectorAll(".menuProduct__img"));


    //     const left = (start,t,end) => {
    //         return start * (1-t) + end * t;
    //     }
    //     const setTransfrom = (el,transform) => {
    //         el.style.transform = transform
    //     }
    //     const setupAnimation = () => {
    //         windowWidth = window.innerHeight;
    //         containerHeight = container.getBoundingClientRect().height;
    //         imageHeight = containerHeight / images.length;

    //         document.body.style.height = `${containerHeight}px`
    //         smothScroll()
    //     }
    //     const smothScroll = () => {
    //         current = left(current,target,ease);
    //         current = parseFloat(current.toFixed(2));
    //         target = window.scrollY;
            
    //         setTransfrom(container,`translateY(${-current}px)`);
    //         updateImage();
    //         requestAnimationFrame(smothScroll);
    //     }
    //     const updateImage = () => {
    //         let ratio = current/imageHeight;
    //         let intersectionRatioValue;

    //         images.forEach((img,idx)=>{
    //             intersectionRatioValue = ratio - (idx * 0.7);
    //             setTransfrom(img,`translateX(${intersectionRatioValue * 70}px)`)
    //         })
    //     }
    //     setupAnimation()
    // })
    return (
        <div className="menu">
            <div className="menu__close d-flex justify-content-center align-items-center hover-cursor hover-text"
                onClick={handleClickCloseMenu}
            >
                <img className="arrowLight" src={arrowLight} alt="PRODUCTS"/>
            </div>
            <div className="menuProducts my-scrollbar">
                <div className="container">
                    <a href="#top">
                        <div className="menuProduct">
                            <div className="menuProduct__img hover-product">
                                <img src={product1} alt="skillpark"/>
                            </div>
                            <div className="menuProduct__name">
                                <h2 className="hover-text hover-cursor">Skill Park</h2>
                            </div>
                        </div>
                    </a>
                    <a href="#top">
                        <div className="menuProduct">
                            <div className="menuProduct__img hover-product">
                                <img src={product1} alt="skillpark"/>
                            </div>
                            <div className="menuProduct__name">
                                <h2 className="hover-text hover-cursor">Skill Park</h2>
                            </div>
                        </div>
                    </a>
                    <a href="#top">
                        <div className="menuProduct">
                            <div className="menuProduct__img hover-product">
                                <img src={product1} alt="skillpark"/>
                            </div>
                            <div className="menuProduct__name">
                                <h2 className="hover-text hover-cursor">Skill Park</h2>
                            </div>
                        </div>
                    </a>
                    <a href="#top">
                        <div className="menuProduct">
                            <div className="menuProduct__img hover-product">
                                <img src={product1} alt="skillpark"/>
                            </div>
                            <div className="menuProduct__name">
                                <h2 className="hover-text hover-cursor">Skill Park</h2>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Menu;