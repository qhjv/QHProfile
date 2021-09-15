import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import logoLoader from '../../src/asset/image/logo-loader.svg'
import gsap from 'gsap'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux';

Loading.propTypes = {
    
};

function Loading(props) {
    const loaded = useSelector(state=>state.loaded)
    
    if(loaded === true){
        setTimeout(() => {
            $('.loading').css('transform','translateY(-100%)')
        }, 100);
    }
    
    return (
        <div className="loading">
            <div className="page-transition"></div>
        </div>
    );
}

export default Loading;