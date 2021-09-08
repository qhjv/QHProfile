import React from 'react';
import gsap from 'gsap'
import $ from 'jquery'

Cursor.propTypes = {
    
};

function Cursor(props) {
    const updateCursor = (e) => {
        const cursor = document.querySelector(".cursor");
        const follower = document.querySelector(".follower");
        if(follower && cursor){
            gsap.to(".cursor", {
                duration: 2,
                x: e.pageX * 2 - 50 + "%",
                y: e.pageY * 2 - 50 + "%",
                ease: "power3.out",
            });
            follower.style.top = e.pageY + "px";
            follower.style.left = e.pageX + "px";
        }
    }

    document.addEventListener("mouseleave", () => {
        if($(".cursor") && $(".follower")) {
            $(".cursor").removeClass("cursorBlock");
            $(".cursor").addClass("cursorNone");
            $(".follower").removeClass("cursorBlock");
            $(".follower").addClass("cursorNone");
        }
    })

    document.addEventListener("mouseover", () => {
        if($(".cursor") && $(".follower")) {
            $(".cursor").removeClass("cursorNone");
            $(".cursor").addClass("cursorBlock");
            $(".follower").removeClass("cursorNone");
            $(".follower").addClass("cursorBlock");
        }
    })
    window.addEventListener("mousemove", updateCursor);
    return (
        <>
            <div className="cursor cursorNone"></div>
            <div className="follower cursorNone"></div>
        </>
    );
}

export default Cursor;