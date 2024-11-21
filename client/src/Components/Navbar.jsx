import React from 'react';
import { Link } from 'react-router-dom';
import instaLogo from '../Assets/images/insta.png'

const Navbar = () => {
  return (
    <nav className='navbar' style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <div className='navImage'>
      <img src={instaLogo} alt="" />
        
      </div>
      <div>
      <Link to="/" >Home</Link>
      <Link to="/create" >Create Post</Link>

      </div>
    </nav>
  );
};

export default Navbar;
