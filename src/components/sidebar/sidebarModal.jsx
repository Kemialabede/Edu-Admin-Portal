import { Position, SideSheet } from 'evergreen-ui';
import { navLinks } from './navLinks';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';
import PropTypes from 'prop-types';

const SidebarModal = ({ isShown, onClose }) => {
  return (
    <div>
      <SideSheet
        position={Position.LEFT}
        isShown={isShown}
        onCloseComplete={() => onClose(false)}
        width={250}
      >
        <div>
          <div
            className={'sidebar_modal'}
            data-background="https://egopielaundry.com/my/assets/admin/images/sidebar/2.jpg"
          >
            <button className="res-sidebar-close-btn"></button>
            <div>
              <div className="sidebar__logo">
                <a href="/my/admin/dashboard" className="sidebar__main-logo">
                  <img
                    src="https://egopielaundry.com/my/assets/images/logoIcon/logo.png"
                    alt="image"
                  />
                </a>
              </div>
              <div
                className="slimScrollDiv"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  width: 'auto',
                  height: 'calc(-86.75px + 100vh)',
                }}
              >
                <div
                  className="sidebar__menu-wrapper"
                  id="sidebar__menuWrapper"
                  style={{
                    overflow: 'scroll',
                    width: 'auto',
                    height: 'calc(-86.75px + 100vh)',
                  }}
                >
                  <ul className="sidebar__menu">
                    {navLinks?.map((item) => {
                      return (
                        <li
                          className={`sidebar-menu-item ${item?.subnav?.length ? 'sidebar-dropdown' : ''}`}
                          key={item.id}
                        >
                          <NavLink
                            to={item.link}
                            className={({ isActive }) =>
                              isActive ? 'sidebar-active' : ''
                            }
                          >
                            <div style={{ marginRight: '15px' }}>
                              {item.icon}
                            </div>
                            <span className="menu-title">{item.name}</span>
                          </NavLink>
                          <div
                            className={`sidebar-submenu sidebar-submenu__open`}
                            style={{ display: 'block' }}
                          ></div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SideSheet>
    </div>
  );
};

SidebarModal.propTypes = {
  isShown: PropTypes.bool,
  onClose: PropTypes.func,
};

export default SidebarModal;
