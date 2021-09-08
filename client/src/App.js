import './App.css';
import Header from './components/header';
import '../src/asset/css/style.css'
import Footer from './components/footer';
import Noise from './components/noise';
import Home from './features/home/home';
import Cursor from './components/cursor';

function App() {
  return (
    <div className="App">
        <Noise></Noise>
        <Cursor></Cursor>
        <Header></Header>
        <div className="wrapper">
          <div className="container">
            <Home></Home>
          </div> 
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
