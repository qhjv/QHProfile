import React,{useEffect,useRef,useState} from 'react';
import PropTypes from 'prop-types';
//jquery
import $ from 'jquery'
//gsap
import {TweenMax, Power3 , gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
//lazyload
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
//Image
import imgLogin from '../../asset/image/products/booking-movie/qhmovie-logout.png'
import signinGif from '../../asset/image/products/booking-movie/signin.gif'
import registerImg from '../../asset/image/products/booking-movie/register.png'
import listmovieGif from '../../asset/image/products/booking-movie/listmovie.gif'
import img1 from '../../asset/image/products/booking-movie/qhmovie.png'
import img2 from '../../asset/image/products/booking-movie/infomovie.png'
import img3 from '../../asset/image/products/booking-movie/bookroom.png'
import img4 from '../../asset/image/products/booking-movie/historyTicket.png'


gsap.registerPlugin(ScrollTrigger)

Product.propTypes = {
    
};
const qhMovieProduct =[
    {   
        name:"QH movie",
        trailer:"",
        decription:"QH Movie is a website to book movie tickets according to the list of cinemas, theater addresses and specific times. You can view movie information , seats , prices and payment options on the page . With a beautiful, easy and simple interface, you will have a pleasant experience",
        reponsibility:"Front-end Developer , Designer",
        technologies:"Reactjs, redux , axios, jquery, bootstrap, css ...",
        year:"2020",
        teamSize:"1 member",
        img:`${imgLogin}`,
        link:"http://hfgedigjhfdkjgh.vn/",
        imgView: [
            {
                id:1,
                src:`${img1}`,
                name:"top page"
            },
            {
                id:2,
                src:`${img2}`,
                name:"Movie information"
            },
            {
                id:3,
                src:`${img3}`,
                name:"seat reservation room"
            },
            {
                id:4,
                src:`${img4}`,
                name:"booking history"
            },
        ],
        imgProduct : [
    
            {
                id:1,
                src:`${signinGif}`,
                name:"Signin"
            },
            {
                id:2,
                src:`${registerImg}`,
                name:"register"
            },
            {
                id:3,
                src:`${listmovieGif}`,
                name:"movie"
            },
        ]
    }
    
]

function Product(props) {

    let productPage = useRef(null)
    let intro_tl = gsap.timeline();
    const [current, setCurrent] = useState(0);
    const lengthImg = qhMovieProduct[0].imgProduct.length;


    $( document ).ready(function() {
        var rect = $('.wrapper')[0].getBoundingClientRect();
        var mouse = {x: 0, y: 0, moved: false};
    
        $(".wrapper").mousemove(function(e) {
            mouse.moved = true;
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });
        // Ticker event will be called on every frame
        gsap.ticker.add(function(){
            if (mouse.moved){    
                // parallaxIt(".productPage-info", -20);
                parallaxIt(".productPage-img", -40);
                parallaxIt(".productPage-button__text", -40);
                // parallaxIt(".productPage-trailer__text", -40);
            }
            mouse.moved = false;
        });
        
        function parallaxIt(target, movement) {
            gsap.to(target, 0.5, {
                x: (mouse.x - rect.width / 2) / rect.width * movement,
                y: (mouse.y - rect.height / 2) / rect.height * movement
            });
        }
        
        $(window).on('resize scroll', function(){
            rect = $('.wrapper')[0].getBoundingClientRect();
        })
    })
    useEffect(() => {
        if($(window).width() > 1025){
            
            intro_tl
            .to(".productPage__title h2", {
                scrollTrigger: {
                    start: 100,
                    end: 300,
                    scrub: 0.5,
                    // markers: true,
                },
                y: -190,
                scale: 0.6,
                duration: 0.6,
                ease: "expo.out"
            })
            .to(".productPage__title p", {
                scrollTrigger: {
                    start: 100,
                    end: 300,
                    scrub: 0.5
                  },
                  y: -190,
                  scale: 0.6,
                  duration: 0.6,
                  ease: "expo.out"
            })
            .to(".scroll-down", {
                scrollTrigger: {
                    start: 100,
                    end: 300,
                    scrub: 0.5
                    },
                opacity: 0,
                duration: 0.6,
                ease: "expo.out"
            })
            .from(".productPage-video__iframe", {
                scrollTrigger: {
                    start: 100,
                    end: 500,
                    scrub: 0.5,
                    // markers: true,
                },
                y: 500,
                opacity: 0,
                duration: 1.5,
                ease: "expo.out"
            })
            .from(".productPage-img", {
                scrollTrigger: {
                    start: 650,
                    end: 1100,
                    scrub: 0.5,
                    // markers: true,
                },
                y: 200,
                opacity: 0,
                duration: 2,
                ease: "expo.out"
            })
            .from(".productPage-info", {
                scrollTrigger: {
                    start: 650,
                    end: 1100,
                    scrub: 0.5,
                    // markers: true,
                },
                opacity: 0,
                duration: 1,
                ease: "expo.out"
            })
            .from(".productPage-trailer__text", {
                scrollTrigger: {
                    start:650,
                    end: 1000,
                    scrub: 0.5,
                    // markers: true,
                },
                x: 500,
                duration: 2,
                ease: "expo.out"
            })
            
        }else{
            
        }
        TweenMax.to(productPage,2,{opacity:1})
        // var i = 0, timeOut = 0;
        // $('.hihi').on('mousedown touchstart', function() {
        //     timeOut = setInterval(function(){
        //         console.log("next")
        //     }, 3000);
        // }).bind('mouseup touchend', function(e) {
        //     console.log("ko next")
        //     $('html,body').animate({
        //         scrollTop: 0
        //     },5000);
        //     clearInterval(timeOut);
        // });
    }, [])
    $('.hover-img').on({
        mouseenter: function() {
            $('.follower').css("background-image",`url(${imgLogin})`)
        },
        mouseleave: function() {
            $('.follower').css("background-image",`none`)
        },
    })
    setTimeout(() => {
        setCurrent(current === lengthImg - 1 ? 0 : current + 1); 
    }, 7000);
    

    return (
        <section className="productPage section" id="productPage" ref={el => productPage = el}>
            <div className="container">
                <div className="productPage__title text-center text-uppercase">
                    <h2 className=" hover-cursor">{qhMovieProduct[0].name}</h2>
                    <p className="hover-cursor">{qhMovieProduct[0].year}</p>
                    <div className="scroll-down">
                        <div className="scroll-down-bar"></div>
                    </div>
                </div>
                    <iframe 
                        className="productPage-video__iframe lazyload"
                        width="100%"
                        title="YouTube video player" 
                        frameBorder="0"
                        allow="autoplay; picture-in-picture" 
                        allowFullScreen
                        data-src="https://www.youtube.com/embed/hW4z1dYE7No">
                    </iframe>
                <div className="productPage-view">
                    <div className="productPage-info">
                        <div className="productPage-decription">
                            <div className="productPage-decription__title">
                                <h3>DESCRIPTION</h3>
                            </div>
                            <div className="productPage-decription__content">
                                <h4 className="hover-cursor">
                                    {qhMovieProduct[0].decription} .
                                </h4>
                            </div>
                        </div>
                        <div className="productPage-more d-flex align-items-center">
                            <div className="productPage-details">
                                <div className="productPage-detail">
                                    <div className="productPage-detail__title text-uppercase text-ogg">REPONSIBILITY</div>
                                    <div className="productPage-detail__content hover-cursor">{qhMovieProduct[0].reponsibility} .</div>
                                </div>
                                <div className="productPage-detail">
                                    <div className="productPage-detail__title text-uppercase text-ogg">technologies</div>
                                    <div className="productPage-detail__content hover-cursor">{qhMovieProduct[0].technologies} .</div>
                                </div>
                            </div>
                            <div className="productPage-details">
                                <div className="productPage-detail">
                                    <div className="productPage-detail__title text-uppercase text-ogg">TEAM SIZE</div>
                                    <div className="productPage-detail__content hover-cursor">{qhMovieProduct[0].teamSize} .</div>
                                </div>
                                <div className="productPage-detail">
                                    <div className="productPage-detail__title text-uppercase text-ogg">site</div>
                                    <div className="productPage-detail__content hover-cursor">
                                        <a href={qhMovieProduct[0].link} target="_blank">
                                            View website  
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productPage-trailer">
                        {(qhMovieProduct[0].imgProduct?qhMovieProduct[0].imgProduct:0).map((img,index)=>(
                            <div 
                                className={
                                    index === current ? 
                                    'productPage-trailer__text text-uppercase hover-cursor active' 
                                    : 'productPage-trailer__text text-uppercase hover-cursor'} 
                                translate="no" 
                                key={index}
                            >
                                {img.name}<span>{img.name}</span>
                            </div>
                        ))}
                        <div className="productPage-img hover-cursor">
                            {(qhMovieProduct[0].imgProduct?qhMovieProduct[0].imgProduct:0).map((img,index)=>(
                                <img className={index === current ? 'lazyload active' : 'lazyload'} data-src={img.src} alt={img.name} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="productPage-imgs">
                    {(qhMovieProduct[0].imgView?qhMovieProduct[0].imgView:0).map((img,index)=>(
                        <div className="productPage-imgs_img" key={index}>
                            <div className="productPage-imgs__name text-uppercase">{img.name}</div>
                            <img className="hover-cursor lazyload" data-src={img.src} alt={img.name} />
                        </div>
                    ))}
                </div>
                <div className="productPage-button">
                        <div className="productPage-button__text text-center text-uppercase hover-img">
                            <a href="">
                                <p>NEXT</p>
                                <i>skill park</i>
                            </a>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Product;