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
    return (
        <div className="menu">
            <div className="menu__close d-flex justify-content-center align-items-center hover-cursor hover-text"
                onClick={handleClickCloseMenu}
            >
                <img className="arrowLight" src={arrowLight} alt="arrow right"/>
            </div>
            <div className="menuProducts">
                <div className="container">
                    <div className="menuProduct">
                        <div className="menuProduct__img">
                            <img src={product1} alt="skillpark"/>
                        </div>
                        <div className="menuProduct__name">
                            <h3>Skill Park</h3>
                        </div>
                    </div>
                    <div className="menuProduct">
                        <div className="menuProduct__img">
                            <img src={product1} alt="skillpark"/>
                        </div>
                        <div className="menuProduct__name">
                            <h3>Skill Park</h3>
                        </div>
                    </div>
                    <div className="menuProduct">
                        <div className="menuProduct__img">
                            <img src={product1} alt="skillpark"/>
                        </div>
                        <div className="menuProduct__name">
                            <h3>Skill Park</h3>
                        </div>
                    </div>
                    <div className="menuProduct">
                        <div className="menuProduct__img">
                            <img src={product1} alt="skillpark"/>
                        </div>
                        <div className="menuProduct__name">
                            <h3>Skill Park</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;