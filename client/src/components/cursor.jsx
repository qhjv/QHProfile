import React,{useState,useEffect} from 'react';
import gsap from 'gsap'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

Cursor.propTypes = {
    
};

function Cursor(props) {
    const [loadRouter,setLoadRouter] = useState(false)
    const loaded = useSelector(state=>state.loaded)
    const location = useLocation();
    
    if(loaded === true){
        setTimeout(() => {
            setLoadRouter(true)
        }, 100);
    }
    let cWidth = 8,
        fWidth = 48,
        delay = 5,
        mouseX = 0,
        mouseY = 0,
        posX = 0,
        posY = 0;
    $(document).on("mousemove", function(e) {
        mouseX = e.clientX
        mouseY = e.clientY
    })
    useEffect(() => {
        gsap.config ({ 
            nullTargetWarn : false ,
        })
        gsap.to({}, .016, {
            
            repeat: -1,
            onRepeat: function() {
                posX += (mouseX - posX) / delay
                posY += (mouseY - posY) / delay
                gsap.set('.follower', {
                    css: {
                        left: posX - fWidth / 2,
                        top: posY - fWidth / 2,
                    }
                })
                gsap.set('.cursor', {
                    css: {
                        left: mouseX - cWidth / 2,
                        top: mouseY - cWidth / 2,
                    }
                })
            }
        })  
        setTimeout(() => {
            $('.hover-cursor').on({
                mouseenter: function() {
                    $('.cursor').addClass("is-active")
                    $('.follower').addClass("is-active")
                },
                mouseleave: function() {
                    $('.cursor').removeClass("is-active")
                    $('.follower').removeClass("is-active")
                }
            })
            $('.hover-product').on({
                mouseenter: function() {
                    $('.cursor').addClass("is-product")
                    $('.follower').addClass("is-product")
                },
                mouseleave: function() {
                    $('.cursor').removeClass("is-product")
                    $('.follower').removeClass("is-product")
                }
            })
            $('.hover-img').on({
                mouseenter: function() {
                    $('.cursor').addClass("is-img")
                    $('.follower').addClass("is-img")
                },
                mouseleave: function() {
                    $('.cursor').removeClass("is-img")
                    $('.follower').removeClass("is-img")
                }
            })
            const link = document.querySelectorAll('.hover-text');
        
            const animateit = function (e) {
                for (let i = 0; i < link.length; i++) {
                    const { offsetX: x, offsetY: y } = e,
                    { offsetWidth: width, offsetHeight: height } = this,
        
                    move = 25,
                    xMove = x / width * (move * 2) - move,
                    yMove = y / height * (move * 2) - move;
        
                    this.style.transform = `translate(${xMove}px, ${yMove}px)`;
        
                    if (e.type === 'mouseleave') this.style.transform = '';
                }   
            };
        
            link.forEach(b => b.addEventListener('mousemove', animateit));
            link.forEach(b => b.addEventListener('mouseleave', animateit));
        }, 500);
    }, [location.pathname,loadRouter]) 
    return (
        <>
            <div className="cursor"></div>
            <div className="follower">
                <div className="follower__text">View</div>
            </div>
        </>
    );
}

export default Cursor;