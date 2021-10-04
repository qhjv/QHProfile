import React,{useEffect,useRef,useState} from 'react';
//jquery
import $ from 'jquery'
//gsap
import {TweenMax, gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
//lazyload
import Lazyload from 'react-lazyload';
//Image
import imgLogin from '../../asset/image/products/booking-movie/qhmovie-logout.png'
//other
import {useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import LoadGif from '../loadGif/loadGif';
import { changeURL } from '../../constants/changeUrl';

gsap.registerPlugin(ScrollTrigger)


function Product(props) {

    let productPage = useRef(null)
    let intro_tl = gsap.timeline();
    const [current, setCurrent] = useState(0);
    
    const [getProduct,setGetProduct] = useState([])
    const [nextProduct,setNextProduct] = useState()
    const [lengthImg,setLengthImg] = useState()
    const productStore = useSelector(state=>state.product)
    const newProduct =[]
    const {
        params: { id }
    } = useRouteMatch()
    console.log((nextProduct?nextProduct:[]).img)
    useEffect(() => {
        //lọc id product
        productStore.filter((product,index) =>{
            return product.name.toLowerCase().split(' ').join('') === id.toLowerCase().split('-').join('')
        }).map((product)=>{
            newProduct.push(product)
            setGetProduct(newProduct)
            setLengthImg(product.imgProduct.length)
            setNextProduct(productStore[(product.id<productStore.length?product.id:0)])
            setTimeout(() => {
                $('.hover-img').on({
                    mouseenter: function() {
                        $('.follower').css("background-image",`url(${(productStore[(product.id<productStore.length?product.id:0)]).img})`)
                    },
                    mouseleave: function() {
                        $('.follower').css("background-image",`none`)
                    },
                })
            }, 500);
        })
        $( document ).ready(function() {
            var rect = $('.wrapper')[0].getBoundingClientRect();
            var mouse = {x: 0, y: 0, moved: false};
            
            $(".wrapper").mousemove(function(e) {
                mouse.moved = true;
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });
            gsap.ticker.add(function(){
                if (mouse.moved){    
                    parallaxIt(".productPage-img", -40);
                    parallaxIt(".productPage-button__text", -40);
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
            const titles = document.querySelectorAll('.productPage-detail__title');
            const contents = document.querySelectorAll('.productPage-detail__content');
            const imgGsaps = document.querySelectorAll('.productPage-imgs_img');
            if($(window).width() > 1025){
                
                intro_tl
                .to(".productPage__title h2", {
                    scrollTrigger: {
                        start: 100,
                        end: 300,
                        scrub: 0.5,
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
                    },
                    y: 500,
                    duration: 1.5,
                    ease: "expo.out"
                })
                .from(".productPage-img", {
                    scrollTrigger: {
                        start: 650,
                        end: 1100,
                        scrub: 0.5,
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
                    },
                    x: 500,
                    duration: 2,
                    ease: "expo.out"
                })
                titles.forEach((title, i) => {
                    intro_tl.from(title, {
                        duration: 1,
                        opacity: 0,
                        x: 100,
                        ease: 'ease-in',
                        scrollTrigger: {
                            trigger: title,
                            start: 'top 80%',
                            end: 'bottom 70%',
                            scrub: 0.5,
                        },
                    });
                });
                contents.forEach((content, i) => {
                    intro_tl.from(content, {
                        duration: 1.5,
                        opacity: 0,
                        x: 100,
                        ease: 'ease-in',
                        scrollTrigger: {
                            trigger: content,
                            start: 'top 80%',
                            end: 'bottom 70%',
                            scrub: 0.5,
                        },
                    });
                });
                imgGsaps.forEach((imgGsap, i) => {
                    intro_tl.from(imgGsap, {
                        duration: 1,
                        y: 100,
                        opacity: 0.5,
                        ease: 'ease-in',
                        scrollTrigger: {
                            trigger: imgGsap,
                            start: 'top 80%',
                            end: 'bottom 60%',
                            scrub: 0.5,
                        },
                    });
                });
            }else{
                intro_tl
                .to(".productPage__title", {
                    scrollTrigger: {
                        start: 50,
                        end: 200,
                        scrub: 0.5,
                    },
                    y: -190,
                    scale: 0.6,
                    duration: 0.6,
                    ease: "expo.out"
                })
                titles.forEach((title, i) => {
                    intro_tl.from(title, {
                        duration: 1,
                        opacity: 0,
                        x: 100,
                        ease: 'ease-in',
                        scrollTrigger: {
                            trigger: title,
                            start: 'top 85%',
                            end: 'bottom 50%',
                            scrub: 0.5,
                        },
                    });
                });
                contents.forEach((content, i) => {
                    intro_tl.from(content, {
                        duration: 1.5,
                        opacity: 0,
                        x: 100,
                        ease: 'ease-in',
                        scrollTrigger: {
                            trigger: content,
                            start: 'top 85%',
                            end: 'bottom 50%',
                            scrub: 0.5,
                        },
                    });
                });
                imgGsaps.forEach((imgGsap, i) => {
                    intro_tl.from(imgGsap, {
                        duration: 1,
                        y: 100,
                        opacity: 0.5,
                        ease: 'ease-in',
                        scrollTrigger: {
                            trigger: imgGsap,
                            start: 'top 90%',
                            end: 'bottom 70%',
                            scrub: 0.5,
                        },
                    });
                });
                intro_tl.from(".productPage-img", {
                    scrollTrigger: {
                        start: 300,
                        end: 500,
                        scrub: 0.5,
                    },
                    y: 200,
                    opacity: 0,
                    duration: 2,
                    ease: "expo.out"
                })
                .from(".productPage-trailer__text", {
                    scrollTrigger: {
                        start:300,
                        end: 400,
                        scrub: 0.5,
                    },
                    x: 300,
                    duration: 1,
                    ease: "expo.out"
                })
                gsap.from(".productPage-button", {
                    scrollTrigger: {
                        trigger: '.productPage-button',
                        start: 'top 90%',
                        end: 'bottom 70%',
                        scrub: 0.5,
                    },
                    scale: 0,
                    duration: 1,
                    ease: "expo.out"
                })
            }
        })
        TweenMax.to(productPage,2,{opacity:1})
    }, [id])
   
    useEffect(() => {
        const timer =
          setInterval(() => setCurrent(current === (lengthImg?lengthImg:0) - 1 ? 0 : current + 1), 7000);
        return () => clearInterval(timer);
    }, [current]);
    
    return (
        <section className="productPage section" id="productPage" ref={el => productPage = el}>
            {(getProduct?getProduct:[]).map((product,index)=>(
                <div className="container" key={index}>
                    <div className="productPage__title text-center text-uppercase">
                        <h2 className=" hover-cursor">{(getProduct[0]?getProduct[0]:[]).name}</h2>
                        <p className="hover-cursor">{(getProduct[0]?getProduct[0]:[]).year}</p>
                        <div className="scroll-down">
                            <div className="scroll-down-bar"></div>
                        </div>
                    </div>
                        <iframe 
                            className="productPage-video__iframe"
                            width="100%"
                            title="YouTube video player" 
                            frameBorder="0"
                            allow="autoplay; picture-in-picture" 
                            allowFullScreen
                            src="https://www.youtube.com/embed/hW4z1dYE7No">
                        </iframe>
                    <div className="productPage-view">
                        <div className="productPage-info">
                            <div className="productPage-decription hover-cursor">
                                <div className="productPage-decription__title">
                                    <h3>DESCRIPTION</h3>
                                </div>
                                <div className="productPage-decription__content">
                                    <h4>
                                        {(getProduct[0]?getProduct[0]:[]).decription} .
                                    </h4>
                                </div>
                            </div>
                            <div className="productPage-more d-flex align-items-center">
                                <div className="productPage-details">
                                    <div className="productPage-detail hover-cursor">
                                        <div className="productPage-detail__title text-uppercase text-ogg">REPONSIBILITY</div>
                                        <div className="productPage-detail__content">{(getProduct[0]?getProduct[0]:[]).reponsibility} .</div>
                                    </div>
                                    <div className="productPage-detail hover-cursor">
                                        <div className="productPage-detail__title text-uppercase text-ogg">technologies</div>
                                        <div className="productPage-detail__content">{(getProduct[0]?getProduct[0]:[]).technologies} .</div>
                                    </div>
                                </div>
                                <div className="productPage-details">
                                    <div className="productPage-detail hover-cursor">
                                        <div className="productPage-detail__title text-uppercase text-ogg">TEAM SIZE</div>
                                        <div className="productPage-detail__content">{(getProduct[0]?getProduct[0]:[]).teamSize} .</div>
                                    </div>
                                    <div className="productPage-detail hover-cursor">
                                        <div className="productPage-detail__title text-uppercase text-ogg">site</div>
                                        <div className="productPage-detail__content">
                                            <a href={(getProduct[0]?getProduct[0]:[]).link} target="_blank">
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
                        <div className="productPage-trailer hover-cursor">
                            {(product.imgProduct?product.imgProduct:[]).map((img,index)=>(
                                <div 
                                    className={
                                        index === current ? 
                                        'productPage-trailer__text text-uppercase active' 
                                        : 'productPage-trailer__text text-uppercase'} 
                                    translate="no" 
                                    key={index}
                                >
                                    {img.name}<span>{img.name}</span>
                                </div>
                            ))}
                            <div className="productPage-img">
                                {(product.imgProduct?product.imgProduct:[]).map((img,index)=>(
                                    <Lazyload placeholder={<LoadGif/>} width={100} height={100} key={index}>
                                        <img className={index === current ? 'active' : ''} src={img.src} alt={img.name}/>
                                    </Lazyload>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="productPage-imgs">
                        {(product.imgView?product.imgView:[]).map((img,index)=>(
                            <div className="productPage-imgs_img" key={index}>
                                <div className="productPage-imgs__name text-uppercase">{img.name}</div>
                                <Lazyload className="hover-cursor" placeholder={<LoadGif/>} width={100} height={100}>
                                    <img src={img.src} alt={img.name} />
                                </Lazyload>
                            </div>
                        ))}
                    </div>
                    
                    <div className="productPage-button">
                            <div className="productPage-button__text text-center text-uppercase hover-img">
                                <Link 
                                    to = {`/product/${changeURL(nextProduct.name)}/reload`}
                                >
                                    <p>NEXT</p>
                                    <i>{nextProduct.name}</i>
                                </Link>
                            </div>
                    </div>
                   
                </div>
            ))}
        </section>
    );
}

export default Product;