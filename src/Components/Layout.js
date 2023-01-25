import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
          My Space
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link p-3' to='/'>
                  Dashboard
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link p-3' to='/products'>
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='container'>
        <Outlet />
      </div>
    </>
  );
}
