import './App.css';
import Header from './components/header';
import '../src/asset/css/style.css'
import Footer from './components/footer';
import Noise from './components/noise';

function App() {
  return (
    <div className="App">
        <Noise></Noise>
        <Header></Header>
        <Footer></Footer>
    </div>
  );
}

export default App;
