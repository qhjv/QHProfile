import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import arrowLight from '../asset/image/icons/arrow-light.png'
import arrowdark from '../asset/image/icons/arrow-dark.png'
import $ from 'jquery'
import { Link, NavLink, useHistory } from 'react-router-dom';
import loadImg from "../asset/image/icons/load.gif"
import {useSelector } from 'react-redux';
import { changeURL } from '../constants/changeUrl';
import Lazyload from 'react-lazyload';
import LoadGif from '../features/loadGif/loadGif';

Menu.propTypes = {
    
};
const images = [
    {
        id:1,
        src:"https://images.unsplash.com/photo-1594312180721-3b5217cfc65f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        name:"Skill Park"
    },
    {
        id:2,
        src:"https://images.unsplash.com/photo-1594312180721-3b5217cfc65f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        name:"QH movie"
    },
];

function Menu(props) {
    const productStore = useSelector(state=>state.product)
    const [getProduct,setGetProduct] = useState([])

    useEffect(() => {
        setGetProduct(productStore)
    }, [])

    const handleClickCloseMenu = () => {
        $(".header-logo").removeClass("transform-left");
        $(".footer-socials").removeClass("transform-left");
        $(".section").removeClass("transform-left");
        $(".backgroundBlur").addClass('hidden');
        $(".menu").removeClass('menutranfrom');
        $("body").removeClass('overflow-hidden');
        $('.spanFast').removeClass('no-trans');
        $('.spanSlow').removeClass('no-trans');
    }
    const handleClickLinkMenu = () => {
        $(".header-logo").removeClass("transform-left");
        $(".footer-socials").removeClass("transform-left");
        $(".section").removeClass("transform-left");
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
                    {(getProduct?getProduct:[]).map((product, index) => (
                        <Link 
                            key={index} 
                            to = {`/product/${changeURL(product.name)}/reload`}
                            onClick={handleClickLinkMenu}
                        >
                            <div className={(index===0 ? "menuProduct menuProduct-first" : "menuProduct")}>
                                <Lazyload className="menuProduct__img hover-product" placeholder={<LoadGif/>} height="100%" weight="100%">
                                    <img src={product.img?product.img:loadImg} alt={product.name}/>
                                </Lazyload>
                                <div className="menuProduct__name">
                                    <h2 className="hover-text hover-cursor">{product.name}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;