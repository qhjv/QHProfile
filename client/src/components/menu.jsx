import React from 'react';
import PropTypes from 'prop-types';
import arrowLight from '../asset/image/icons/arrow-light.png'
import arrowdark from '../asset/image/icons/arrow-dark.png'
import $ from 'jquery'
import { Link, NavLink, useHistory } from 'react-router-dom';
import loadImg from "../asset/image/icons/load.gif"

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
    //url seo
    const changeURL = (str) =>
        {
            // Chuyển hết sang chữ thường
            str = str.toLowerCase();     
        
            // xóa dấu
            str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
            str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
            str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
            str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
            str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
            str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
            str = str.replace(/(đ)/g, 'd');
        
            // Xóa ký tự đặc biệt
            str = str.replace(/([^0-9a-z-\s])/g, '');
        
            // Xóa khoảng trắng thay bằng ký tự -
            str = str.replace(/(\s+)/g, '-');
        
            // xóa phần dự - ở đầu
            str = str.replace(/^-+/g, '');
        
            // xóa phần dư - ở cuối
            str = str.replace(/-+$/g, '');
        
            // return
            return str;
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
                    {(images?images:[]).map((image, index) => (
                        <Link 
                            key={index} 
                            to = {`/product/${changeURL(image.name)}`}
                            onClick={handleClickLinkMenu}
                        >
                            <div className={(index===0 ? "menuProduct menuProduct-first" : "menuProduct")}>
                                <div className="menuProduct__img hover-product">
                                    <img src={image.src?image.src:loadImg} alt={image.name}/>
                                </div>
                                <div className="menuProduct__name">
                                    <h2 className="hover-text hover-cursor">{image.name}</h2>
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