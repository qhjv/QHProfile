import React from 'react';
import PropTypes from 'prop-types';
import product1 from '../asset/image/products/1.jpg'
import arrowLight from '../asset/image/icons/arrow-light.png'
import arrowdark from '../asset/image/icons/arrow-dark.png'
import $ from 'jquery'

Menu.propTypes = {
    
};
const images = [
    "https://images.unsplash.com/photo-1551392505-f4056032826e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1497&q=80",
    "https://images.unsplash.com/photo-1594312180721-3b5217cfc65f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    "https://images.unsplash.com/photo-1593806812862-1dc510b769a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80",
    "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    "https://images.unsplash.com/photo-1484517186945-df8151a1a871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
];

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
                <img className="arrowLight" src={arrowLight} alt="PRODUCTS"/>
            </div>
            <div className="menuProducts my-scrollbar">
                <div className="container">
                    {images.map((image, index) => (
                        <a key={index} href="#top">
                            <div className={(index===0 ? "menuProduct menuProduct-first" : "menuProduct")}>
                                <div className="menuProduct__img hover-product">
                                    <img src={image} alt="skillpark"/>
                                </div>
                                <div className="menuProduct__name">
                                    <h2 className="hover-text hover-cursor">Skill Park</h2>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;