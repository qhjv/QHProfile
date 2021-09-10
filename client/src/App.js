import './App.css';
import Header from './components/header';
import '../src/asset/css/style.css'
import Footer from './components/footer';
import Noise from './components/noise';
import Home from './features/home/home';
import Cursor from './components/cursor';
import Scrollbar from 'smooth-scrollbar';
import $ from 'jquery'
function App() {
  window.addEventListener('load',() => {
      Scrollbar.init(document.querySelector('#my-scroll'), {
          damping:0.01,
          thumbMinSize:20
      });
      Scrollbar.detachStyle()
  })
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
          <div className="wrapper">
            <div id="my-scroll">
              <Home></Home>
            </div>
          </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
