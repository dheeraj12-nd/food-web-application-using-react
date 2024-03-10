import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Products from './components/Products';
import Review from './components/Review';
import Contact from './components/Contact'
import Blog from './components/Blog';
import Footer from './components/Footer';


function App() {
  return (
    <div className='main-container'>
        <Navbar/>
        <Home/>
        <About/>
        <Menu/>
        <Products/>
        <Review/>
        <Contact/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
