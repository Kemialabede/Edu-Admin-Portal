import './profile.scss';
import { useUserContext } from '../../contexts/userContexts';

const UserProfile = () => {
  const { userData } = useUserContext();
  return (
    <>
      {' '}
      <div className="password_setting__roleInfo">
        <div className="password_setting__role">
          <img src="https://egopielaundry.com/my/placeholder-image/400x400" />
          <p>{userData?.admin?.role}</p>
        </div>
        <div className="password_setting__content">
          <div>
            <p>Name</p>
            <p>
              {userData?.admin?.first_name} {userData?.admin?.last_name}
            </p>
          </div>
          <div>
            <p>Email</p>
            <p>{userData?.admin?.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
