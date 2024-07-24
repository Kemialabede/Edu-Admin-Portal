import './header.scss';
import { Menu } from 'evergreen-ui';

const Notifications = () => {
  return (
    <div>
      <Menu.Group>
        <div className="notifications">
          <div className="notifications__header">
            <span className="notifications__header__caption">Notification</span>
            <p>You have 9 unread notification</p>
          </div>
          <div>
            <div className="notifications__body">
              <a
                href="https://egopielaundry.com/my/admin/notification/read/9"
                className="dropdown-menu__item"
              >
                <div className="notifications__body__item">
                  <div className="navbar-notifi__right">
                    <h6 className="notifi__title">New member registered</h6>
                    <span className="time">
                      <i className="far fa-clock"></i> 1 month ago
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://egopielaundry.com/my/admin/notification/read/8"
                className="dropdown-menu__item"
              >
                <div className="notifications__body__item">
                  <div className="navbar-notifi__right">
                    <h6 className="notifi__title">New member registered</h6>
                    <span className="time">
                      <i className="far fa-clock"></i> 2 months ago
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://egopielaundry.com/my/admin/notification/read/7"
                className="dropdown-menu__item"
              >
                <div className="notifications__body__item">
                  <div className="navbar-notifi__right">
                    <h6 className="notifi__title">New member registered</h6>
                    <span className="time">
                      <i className="far fa-clock"></i> 3 months ago
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://egopielaundry.com/my/admin/notification/read/6"
                className="dropdown-menu__item"
              >
                <div className="notifications__body__item">
                  <div className="navbar-notifi__right">
                    <h6 className="notifi__title">New member registered</h6>
                    <span className="time">
                      <i className="far fa-clock"></i> 9 months ago
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://egopielaundry.com/my/admin/notification/read/5"
                className="dropdown-menu__item"
              >
                <div className="notifications__body__item">
                  <div className="navbar-notifi__right">
                    <h6 className="notifi__title">New member registered</h6>
                    <span className="time">
                      <i className="far fa-clock"></i> 9 months ago
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://egopielaundry.com/my/admin/notification/read/4"
                className="dropdown-menu__item"
              >
                <div className="notifications__body__item">
                  <div className="navbar-notifi__right">
                    <h6 className="notifi__title">New member registered</h6>
                    <span className="time">
                      <i className="far fa-clock"></i> 9 months ago
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://egopielaundry.com/my/admin/notification/read/3"
                className="dropdown-menu__item"
              >
                <div className="notifications__body__item">
                  <div className="navbar-notifi__right">
                    <h6 className="notifi__title">New member registered</h6>
                    <span className="time">
                      <i className="far fa-clock"></i> 10 months ago
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://egopielaundry.com/my/admin/notification/read/2"
                className="dropdown-menu__item"
              >
                <div className="notifications__body__item">
                  <div className="navbar-notifi__right">
                    <h6 className="notifi__title">
                      Deposit successful via PayStack - NGN
                    </h6>
                    <span className="time">
                      <i className="far fa-clock"></i> 10 months ago
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://egopielaundry.com/my/admin/notification/read/1"
                className="dropdown-menu__item"
              >
                <div className="notifications__body__item">
                  <div className="navbar-notifi__right">
                    <h6 className="notifi__title">New member registered</h6>
                    <span className="time">
                      <i className="far fa-clock"></i> 10 months ago
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="dropdown-menu__footer">
            <a href="/notifications" className="view-all-message">
              View all notification
            </a>
          </div>
        </div>
      </Menu.Group>
    </div>
  );
};

export default Notifications;
