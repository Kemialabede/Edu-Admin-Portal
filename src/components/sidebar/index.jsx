import React from 'react';
import './sidebar.scss';
import { navLinks } from './navLinks';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
      {navLinks?.map((item) => (
        <div key={item.link}>
          <NavLink 
            to={item.link}
            className={({ isActive }) => isActive ? 'sidebar-active' : 'sidebar-item'}
          >  
          <div>{item.icon}</div><span>{item.name}</span></NavLink>
        </div>
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
};

export default Sidebar;
