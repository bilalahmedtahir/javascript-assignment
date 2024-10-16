import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user/:id' element={<User />}></Route>
          </Routes>

          <div className='user-list'>
            <h2>Users: </h2>
            <ul>
              <li><Link to="/user/1">User 1</Link></li>
              <li><Link to="/user/2">User 2</Link></li>
              <li><Link to="/user/3">User 3</Link></li>
            </ul>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
