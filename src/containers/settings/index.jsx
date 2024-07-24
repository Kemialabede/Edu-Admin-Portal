import { useState } from 'react';
import DashboardLayout from '../../components/layout';
import './settings.scss';
import { useFetchGeneralSettings } from '../../hooks/queries/useFetchGeneralSettings';
import Button from '../../components/button';
import { IoIosAddCircleOutline } from 'react-icons/io';
import UpdateSettingModal from './updateSettingModal';
import { useUserContext } from '../../contexts/userContexts';

const Settings = () => {
  const { data, isFetching } = useFetchGeneralSettings();
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const { userData } = useUserContext();
  const permissions = userData?.admin?.permissions;

  return (
    <DashboardLayout
      pageTitle={true}
      content={
        <>
          {(permissions?.includes('update_settings') ||
            permissions === 'all') && (
            <div className="create-button">
              <Button onClick={() => handleOpenModal('update')}>
                <div className="create-button__inner">
                  <IoIosAddCircleOutline />
                  <p>Update Test Setting</p>
                </div>
              </Button>
            </div>
          )}
        </>
      }
    >
      {isFetching ? (
        <div className="settings-container settings-loader">
          <div className="settings-container__grid">
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
              </div>
            ))}
          </div>
          <div>
            <div className="skeleton-title"></div>
            <div className="skeleton-text skeleton-text-long"></div>
          </div>
        </div>
      ) : (
        <div className="settings-container">
          <div className="settings-container__grid">
            <div>
              <p>Attempts</p>
              <p>{data?.number_of_attempt}</p>
            </div>
            <div>
              <p>Time</p>
              <p>{`${data?.time}mins`}</p>
            </div>
            <div>
              <p>Score Mark</p>
              <p>{data?.score_mark}</p>
            </div>
            <div>
              <p>Number of questions</p>
              <p>{data?.number_of_question}</p>
            </div>
          </div>
          <div>
            <p>Instruction</p>
            <p>{data?.instruction}</p>
          </div>
        </div>
      )}

      <UpdateSettingModal
        isShown={openModal === 'update'}
        setIsShown={() => setOpenModal(false)}
        data={data}
      />
    </DashboardLayout>
  );
};

export default Settings;
