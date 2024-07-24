import PropTypes from 'prop-types';
import './hamburgerMenu.scss';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  color: PropTypes.string,
};

HamburgerMenu.defaultProps = {
  color: '#000',
};

export default HamburgerMenu;
