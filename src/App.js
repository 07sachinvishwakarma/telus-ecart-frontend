import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Services from './components/Services';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Category from './components/Category';
import PrivateComponent from './components/privateComponent';
import Logout from './components/Logout';
import Product from './components/Product';
// import CartDetail from './components/CartItem';
import Carts from './components/carts';
import Payment from './components/payment';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='logout' element={<Logout />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About />} />
          <Route path='product' element={<Product />} />
          <Route path='category' element={<Category />} />
          <Route path='service' element={<Services />} />
          <Route path='contact' element={<Contact />} />
          {/* <Route path='addToCart' element={<CartDetail />} /> */}
          <Route path='addToCart' element={<Carts />} />
          <Route path='payment' element={<Payment />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
