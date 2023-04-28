import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Cart from './pages/Cart/Cart';
import User from './pages/User/User.jsx';
import LoggedIn from './pages/loggedIn/LoggedIn.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import Confirmed from './pages/Confirmed/Confirmed.jsx';
import About from './pages/About/About.jsx';
import Personal from './pages/Personal/Personal.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div className='new'>
        <Navbar />

        <Routes>
          <Route
            path='/home'
            element={<Home />}
          >
            {' '}
          </Route>
          <Route
            path='/cart'
            element={<Cart />}
          />
          <Route
            path='/'
            element={<User />}
          />
          <Route
            path='/checkout'
            element={<Checkout />}
          />
          <Route
            path='/success'
            element={<LoggedIn />}
          />
          <Route
            path='/confirmed'
            element={<Confirmed />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/user'
            element={<Personal />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
