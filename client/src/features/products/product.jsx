import React,{useEffect,useRef,useState} from 'react';
import PropTypes from 'prop-types';
import {TweenMax, Power3 , gsap} from 'gsap';
import $ from 'jquery'
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
        year:"2020",
        teamSize:"1 member",
        src:"http://hfgedigjhfdkjgh.vn/",
        imgView: [
            {
                id:1,
                src:`${img1}`,
                name:""
            },
            {
                id:2,
                src:`${img2}`,
                name:""
            },
            {
                id:3,
                src:`${img3}`,
                name:""
            },
            {
                id:4,
                src:`${img4}`,
                name:""
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
        if($(window).width() > 768){
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
            .from(".productPage-video", {
                scrollTrigger: {
                    start: 100,
                    end: 500,
                    scrub: 0.5,
                    // markers: true,
                },
                y: 200,
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
    }, [])
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
                <div className="productPage-video w-100">
                    <img src={imgLogin} alt="skill park"/>
                </div>
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
                                    <div className="productPage-detail__title text-uppercase text-ogg">TEAM SIZE</div>
                                    <div className="productPage-detail__content hover-cursor">{qhMovieProduct[0].teamSize} .</div>
                                </div>
                            </div>
                            <div className="productPage-details">
                                <div className="productPage-detail">
                                    <div className="productPage-detail__title text-uppercase text-ogg">year</div>
                                    <div className="productPage-detail__content hover-cursor">{qhMovieProduct[0].year} .</div>
                                </div>
                                <div className="productPage-detail">
                                    <div className="productPage-detail__title text-uppercase text-ogg">site</div>
                                    <div className="productPage-detail__content hover-cursor">
                                        <a href={qhMovieProduct[0].src} target="_blank">
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
                                <img className={index === current ? 'active' : ''} src={img.src} alt={img.name} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="productPage-imgs">
                    {(qhMovieProduct[0].imgView?qhMovieProduct[0].imgView:0).map((img,index)=>(
                        <div className="productPage-img" key={index}>
                            <img src={img.src} alt={img.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Product;