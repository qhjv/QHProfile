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
      Scrollbar.init(document.querySelector('.my-scrollbar'), {
        damping:0.02
      });
      Scrollbar.detachStyle()
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
