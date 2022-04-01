import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import './Navbar.css'

export default function Navbar() {
  const [search, setSearch] = useState(false);


  const submitSearch = (e) => {
    e.preventDefault();
    alert('Searched');

  }

  const openSearch = () => {
    setSearch(true);
  }

  const searchClass = search ? 'searchinput active' : 'searchinput';
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light navbar-color  ">
        <div className="container-fluid">
          <h3 className='nasa'>NASA</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className='linkclass'><Link to='/Home' className='linkclass2'>
                Home</Link></li>
                <li className='linkclass'><Link to='/Apod' className='linkclass2'>Apod</Link></li>
                <li className='linkclass'><Link to='/Earth' className='linkclass2'>Earth</Link></li>
                <li className='linkclass'><Link to='/Mars' className='linkclass2'>Mars</Link></li>




            </ul>
            <div className='search'>

              <form onSubmit={submitSearch}>
                <input type='text' className={searchClass} placeholder='Search' />
                <img onClick={openSearch} className='searchicon' src={require('../image/search.png')} alt='aaa' />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
