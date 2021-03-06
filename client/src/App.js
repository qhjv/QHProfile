import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './components/header';
import '../src/asset/css/style.css'
import Footer from './components/footer';
import Noise from './components/noise';
import Cursor from './components/cursor';
import Scrollbar from 'smooth-scrollbar';
import luxy from 'luxy.js'
import $ from 'jquery'
import Menu from './components/menu';
import Loading from './components/loading';
import Preloader from './components/preloader/preloader';
import { useDispatch, useSelector } from 'react-redux';
import Router from './router/router';
import More from './components/more';
import { setProductApi } from './features/products/productSlice';
// import productApi from './api/productApi';
import {products} from './api/productApi';

function App() {
  const loaded = useSelector(state=>state.loaded)
  const [mobile,setMobile] = useState(false)
  const dispatch = useDispatch()

  const handleClickBlur = () => {
    $(".header-logo").removeClass("transform-left");
    $(".footer-socials").removeClass("transform-left");
    $(".section").removeClass("transform-left");
    $(".backgroundBlur").addClass('hidden');
    $(".menu").removeClass('menutranfrom');
    $('.spanFast').removeClass('no-trans')
    $('.spanSlow').removeClass('no-trans')
    $("body").removeClass('overflow-hidden');
  }
  const getProductApi = async()=>{
    (async () => {
        try {
            // const productList = await productApi.getAllProduct();
            const action = setProductApi(products)
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    })();
  }
  useEffect(() => {
    getProductApi()
    // const action = setProductApi(products)
    // dispatch(action)
  }, [])
      
  if(loaded === true){
      $('body').removeClass('overflow-hidden')
      $( document ).ready(function() {
        if($(window).width() < 768){
          setMobile(true)
          Scrollbar.init(document.querySelector('.my-scrollbar'), {
            damping:0.1
          });
          Scrollbar.detachStyle()  
        }else{
          setMobile(false)
          luxy.init({
            wrapper: "#luxy",
            wrapperSpeed: .02
          });
          Scrollbar.init(document.querySelector('.my-scrollbar'), {
            damping:0.02
          });
          Scrollbar.detachStyle()    
        }
      });
    return (
      <div className="App">
          <Noise></Noise>
          <Cursor></Cursor>
          <Header></Header>
          <Menu></Menu>
          <Loading></Loading>
          <div className="backgroundBlur hidden" 
                onClick={handleClickBlur}>
          </div>
            <div className="wrapper" id="luxy" data-barba="container" data-barba-namespace="home-section">
                <div className="loader"></div>
                <Router></Router>
            </div> 
          <Footer></Footer>
      </div>
    );
  }else{
    $('body').addClass('overflow-hidden')
    return(
      <div className="App">
          <Noise></Noise>
          <Loading></Loading>
          <Preloader></Preloader>
      </div>
    )

  }
}

export default App;
