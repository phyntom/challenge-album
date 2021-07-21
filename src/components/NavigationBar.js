import React from 'react';
import { Link } from 'react-router-dom';
export default function NavigationBar() {
   return (
      <div className='header'>
         <nav className='nav'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
         </nav>
      </div>
   );
}
