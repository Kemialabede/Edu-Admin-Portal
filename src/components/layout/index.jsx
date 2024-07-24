import Sidebar from '../sidebar';
import Header from '../header';
import './layout.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

const DashboardLayout = ({ children, content, pageTitle }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = (e) => {
    if (e.target.checked) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="layout-flex">
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <div
        className={`layout-content ${isOpen ? 'layout-content--shifted' : ''}`}
      >
        <Header content={content} pageTitle={pageTitle} />
        <div className={isOpen ? 'body-wrapper' : 'body-wrapper__full'}>
          {children}
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
};

export default DashboardLayout;
