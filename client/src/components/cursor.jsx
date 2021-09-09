import React from 'react';
import gsap from 'gsap'
import $ from 'jquery'

Cursor.propTypes = {
    
};

function Cursor(props) {
    
    let cWidth = 8,
        fWidth = 48,
        delay = 10,
        mouseX = 0,
        mouseY = 0,
        posX = 0,
        posY = 0;
        console.log("1")
    $(document).on("mousemove", function(e) {
        mouseX = e.clientX
        mouseY = e.clientY
    })

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
                    top: posY - fWidth / 2
                }
            })
            gsap.set('.cursor', {
                css: {
                    left: mouseX - cWidth / 2,
                    top: mouseY - cWidth / 2
                }
            })
        }
    })  
    
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

    return (
        <>
            <div className="cursor"></div>
            <div className="follower"></div>
        </>
    );
}

export default Cursor;