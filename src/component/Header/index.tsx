import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scoped.css';

export default function Header() {
  const location = useLocation();

  return <div className="header">
    <div className="logo">App</div>
    <ul className="menus">
      <li>
        <Link to={"/"} className={location.pathname === '/' ? 'active-menu' : ''}>
          List
        </Link>
      </li>
      <li>
        <Link to={"/create"} className={location.pathname === '/create' ? 'active-menu' : ''}>
          Add new item
        </Link>
      </li>
    </ul>
  </div>;
}
