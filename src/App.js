import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Login from "./components/loginmodule/Login"
import Signup from "./components/signupmodule/Signup"
import AppContext from "./utils/context";
import About from './components/About/About';
function App() {
  return (
    <BrowserRouter>
      <AppContext>
     
        <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/" element={<Login/>} />
            <Route path="/About" element={<About/>} />
            <Route path="Signup" element={<Signup/>}/>
            <Route path="/category/:id" element={<Category />}/>
            <Route path="/product/:id" element={<SingleProduct />}/>
        </Routes>
       
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
