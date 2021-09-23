import React,{useRef,useEffect,useState} from 'react';
import $ from 'jquery'
import mp3 from '../asset/files/music.mp3'
import {TweenMax, TweenLite, gsap} from 'gsap';
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

More.propTypes = {
    
};

function More(props) {
    const audioRef = useRef();
    let more = useRef(null)
    const [isPlay, setPlay] = useState(false);
    useEffect(() => {
        TweenMax.to(more,0,{visibility:'visible'});
        Draggable.create(".brand", {type:"x,y",
            bounds:".more__div",
            edgeResistance:0.5,
            throwProps:true,
        });

        $('.brand').on({
            mouseenter: function() {
                $('.brand').addClass("svgMore-opacity")
            },
            mouseleave: function() {
                setTimeout(() => {
                    $('.brand').removeClass("svgMore-opacity")
                }, 2000);
            }
        })
    }, [])

    const handleClickMusic =() => {
        if (isPlay) {
            audioRef.current.pause();
            $('.brand-label svg').removeClass('svgMore-active')
          } else {
            audioRef.current.play();
            $('.brand-label svg').addClass('svgMore-active')
          }
          setPlay(!isPlay);
    }
    const handleLoadedData = () => {
        if (isPlay) audioRef.current.pause();
      };
    return (
        <div className="more" ref={el => more = el}>
            <div className="more__div">
                <div className="brand" onClick={handleClickMusic}>
                    <div className="icon-circle">
                        <div className="icon-circle__child">
                            {isPlay===false?(
                                <svg className="svg-play" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 30.065 30.065" style={{enableBackground: 'new 0 0 30.065 30.065'}} xmlSpace="preserve">
                                    <g>
                                    <path d="M26.511,12.004L6.233,0.463c-2.151-1.228-4.344,0.115-4.344,2.53v24.093   c0,2.046,1.332,2.979,2.57,2.979c0.583,0,1.177-0.184,1.767-0.543l20.369-12.468c1.024-0.629,1.599-1.56,1.581-2.555   C28.159,13.503,27.553,12.593,26.511,12.004z M25.23,14.827L4.862,27.292c-0.137,0.084-0.245,0.126-0.319,0.147   c-0.02-0.074-0.04-0.188-0.04-0.353V2.994c0-0.248,0.045-0.373,0.045-0.404c0.08,0.005,0.22,0.046,0.396,0.146l20.275,11.541   c0.25,0.143,0.324,0.267,0.348,0.24C25.554,14.551,25.469,14.678,25.23,14.827z" />
                                    </g>
                                </svg>
                            ):(
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 224.075 224.075" style={{enableBackground: 'new 0 0 224.075 224.075'}} xmlSpace="preserve">
                                    <g transform="translate(0 -562.36)">
                                    <g>
                                        <g>
                                        <path d="M160.738,562.36c-7.9,0-14.2,6.3-13.7,14.2v195.7c-0.5,18.9,28.5,18.9,28,0v-195.7
                                            C175.038,568.66,168.738,562.36,160.738,562.36z" />
                                        <path d="M62.738,562.36c-7.4,0-13.7,6.3-13.7,14.2v195.7c-0.5,18.9,28.5,18.9,28,0v-195.7
                                            C77.538,568.66,70.638,562.36,62.738,562.36z" />
                                        </g>
                                    </g>
                                    </g>
                                </svg>
                            )}

                        </div>
                    </div>
                    <div className="brand-label">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" aria-hidden="true">
                            <defs>
                                <path id="a" d="M90 150a60 60 0 01120 0 60 60 0 01-120 0" />
                            </defs>
                            <use xlinkHref="#a" fill="none" />
                            <text>
                                <textPath xlinkHref="#a"> Click • Turn on/off &amp; Music •</textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
            <audio id="myMusic" ref={audioRef} onLoadedData={handleLoadedData}>
                <source src={mp3} type="audio/mp3"/>
            </audio> 
        </div>
    );
}

export default More;