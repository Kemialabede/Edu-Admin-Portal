import { useState } from 'react';
import Layout from '../../components/layout';
import ConfirmPassword from './confirmPassword';
import Tabs from '../../components/tabs/tabs';
// import ProfileSettings from './profileSetting';

const tabs = [
  // {
  //   id: 1,
  //   label: 'Profile',
  // },
  {
    id: 2,
    label: 'Password',
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <Layout pageTitle={true}>
      <Tabs tabs={tabs} active={activeTab} setActive={setActiveTab} />
      {/* {activeTab?.label === 'Profile' && <ProfileSettings />} */}
      {activeTab?.label === 'Password' && <ConfirmPassword />}
    </Layout>
  );
};

export default Profile;
