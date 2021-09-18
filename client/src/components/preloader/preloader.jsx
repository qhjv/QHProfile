import React,{useState} from 'react';
import gsap from 'gsap'
import $ from 'jquery'
import { useDispatch } from 'react-redux';
import { loadedSet } from './preloaderSlice';


Preloader.propTypes = {
    
};

function Preloader(props) {
    const dispatch = useDispatch()
    const tll = gsap.timeline();
    var width = 1;
    var id;
    window.onload = function () { 
      id = setInterval(frame,10);
    }
    const frame= () => {
      if(width>=100){
        $("#path1").css('stroke' , 'yellow');
        $("#path1").css('fill' , 'yellow');
        $("#path2").css('stroke' , 'yellow');
        $("#path2").css('fill' , 'yellow');
        $("#percent").css('color', 'yellow');
          clearInterval(id);
          setTimeout(() => {
            tll.to("#percent, #bar,svg",{
              duration:.2,
              opacity: 0,
              zIndex: -1
            });
            tll.to("#preloader",{
              duration: .8,
              width: "0%"
            });
            tll.from(".wrapper",{
                duration: 1.5,
                y: "-150%"
            },"-=.2");
            setTimeout(() => {
              const action = loadedSet(true)
              dispatch(action)
            }, 1000);
          }, 1000);
        }
        else{
            width++;
            $("#path1").css('strokeDasharray' ,` ${width + 50}`);
            $("#path2").css('strokeDasharray' ,`${(width+50)*3}`);
            document.getElementById("percent").innerHTML = width + "%";
        }
    }
    return (
        <div className="preloader" id="preloader" style={{display: 'none'}}>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 95 114.3" style={{enableBackground: 'new 0 0 95 114.3'}} xmlSpace="preserve">
          <g>
            <path className="st0" id="path1" d="M53.4,107.4c0,2.5-2.4,4.6-5.4,4.6l0,0c-3,0-5.4-2-5.4-4.6V49.9c0-2.5,2.4-4.6,5.4-4.6l0,0c3,0,5.4,2,5.4,4.6
              V107.4z" />
            <path className="st0" id="path2" d="M48,3.9C24.1,3.9,4.7,23.2,4.7,47.1c0,17.8,10.7,33,26.1,39.7c4.2,0,6.7-7.3,4.2-9.8
              c-11.6-5-19.6-16.5-19.6-29.9c0-18,14.6-32.6,32.6-32.6s32.6,14.6,32.6,32.6c0,13.4-8.1,24.9-19.6,29.9c-2,2,2.1,9.8,4.2,9.8
              c15.3-6.6,26.1-21.9,26.1-39.7C91.2,23.2,71.8,3.9,48,3.9z" />
          </g>
        </svg>
        <div id="percent">1%</div>
      </div>
    );
}

export default Preloader;