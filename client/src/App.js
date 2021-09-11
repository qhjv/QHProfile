import './App.css';
import Header from './components/header';
import '../src/asset/css/style.css'
import Footer from './components/footer';
import Noise from './components/noise';
import Home from './features/home/home';
import Cursor from './components/cursor';
import Scrollbar from 'smooth-scrollbar';
import luxy from 'luxy.js'
import $ from 'jquery'
import Menu from './components/menu';
function App() {
  window.addEventListener('load',() => {
      luxy.init({
        wrapper: "#luxy",
        wrapperSpeed: .065
      });
  })
  const handleClickBlur = () => {
        $(".header-logo").removeClass("transform-left");
        $(".footer-socials").removeClass("transform-left");
        $("#home").removeClass("transform-left");
        $(".backgroundBlur").addClass('hidden');
        $(".menu").removeClass('menutranfrom');
        $('.spanFast').removeClass('no-trans')
        $('.spanSlow').removeClass('no-trans')
        $("body").removeClass('overflow-hidden');
  }
  // let current = 0,
  //     target = 0, 
  //     ease = 0.01;
  
  // let windowWidth , containerHeight , imageHeight , skewDiff;
  // let container = document.querySelector('.wrapper')

  // const left = (start,t,end) => {
  //   return start * (1-t) + end * t;
  // }
  // const setTransfrom = (el,transform) => {
  //   el.style.transform = transform
  // }
  // const setupAnimation = () => {
  //   windowWidth = window.innerHeight;
  //   containerHeight = container.getBoundingClientRect().height;
  //   document.body.style.height = `${containerHeight}px`
  //   smothScroll()
  // }
  // const smothScroll = () => {
  //   current = left(current,target,ease);
  //   current = parseFloat(current.toFixed(2));
  //   target = window.scrollY;
    
  //   setTransfrom(container,`translateY(${-current}px)`);
  //   requestAnimationFrame(smothScroll)
  // }
  //   window.addEventListener('load',() => {
  //     setupAnimation()
  //   })
  return (
    <div className="App">
        <Noise></Noise>
        <Cursor></Cursor>
        <Header></Header>
        <Menu></Menu>
        <div className="backgroundBlur hidden" 
              onClick={handleClickBlur}>
        </div>
          <div className="wrapper" id="luxy">
              <Home></Home>
          </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
