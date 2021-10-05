import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import logoLoader from '../../src/asset/image/logo-loader.svg'
import gsap from 'gsap'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

Loading.propTypes = {
    
};

function Loading(props) {
    const [loadRouter,setLoadRouter] = useState(false)
    const loaded = useSelector(state=>state.loaded)
    const location = useLocation();
    
    if(loaded === true){
        setTimeout(() => {
            $('.loading').css('transform','translateY(-100%)')
            setLoadRouter(true)
        }, 100);
    }
    
    // const action = loading(true)
    // dispatch(action)
    useEffect(() => {
        $(window).scrollTop(0)
        $('.overlay').removeClass('hidden')
        setTimeout(() => {
            $('.loadRouter').addClass('animationLoadRouter')
        }, 100);
        setTimeout(() => {
            $('.overlay').addClass('hidden')
        }, 1000);
        $('.loadRouter').removeClass('animationLoadRouter')
    },[location.pathname,loadRouter]);
    return (
        <>
            <div className="loading">
                <div className="page-transition"></div>
            </div>
            <div className="loadRouter">
            </div>
            <div className="overlay hidden">
            </div>
        </>
    );
}

export default Loading;