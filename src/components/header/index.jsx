import './header.scss';
import { IoIosArrowDropdown, IoIosNotificationsOutline } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { getPageTitle } from './getPageTitle.js';
import { useLocation, useNavigate } from 'react-router-dom';
import Dropdown from '../dropdown';
import { Menu } from 'evergreen-ui';
import { LuKeyRound } from 'react-icons/lu'
import { IoMdLogOut } from 'react-icons/io'
import Notifications from './notifications.jsx';

const Header = ({ content, pageTitle}) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
    <div className="header-container">
      <p className="greeting">Welcome back Taylor 👋</p>
      <div className="header-actions">
            <img width="48" height="48" src="https://img.icons8.com/color/48/circled-user-male-skin-type-1-2--v1.png" alt="circled-user-male-skin-type-1-2--v1"/>
        <Dropdown icon={<IoIosNotificationsOutline width={30} height={30} />}>
          <Notifications />
        </Dropdown>
        <Dropdown icon={<IoIosArrowDropdown />}>
                    <Menu.Item className='menu-item'>
                      <div onClick={() => navigate('/profile')}>
                        <CgProfile />
                        <p>Profile</p>
                      </div>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item className='menu-item'>
                      <div onClick={() => {}}>
                        <IoMdLogOut />
                        <p>Logout</p>
                      </div>
                    </Menu.Item>
                  </Dropdown>
      </div>
    </div>
    <br />
    <br />
    {pageTitle && <>
    
    <div className="page-heading">
      <p>{getPageTitle(location.pathname)}</p>
      <div>{content}</div>
    </div>
    </>}
    </>
  )
}

export default Header
