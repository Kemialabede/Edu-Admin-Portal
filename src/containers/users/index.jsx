import Dropdown from "../../components/dropdown";
import DashboardLayout from "../../components/layout"
import Table from "../../components/table";
import { data, headers } from "../../mocks/users";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Menu } from 'evergreen-ui';
import DeactivateModal from "./deactivateModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from '../../components/search'

const Users = () => {
      const [openModal, setOpenModal] = useState(null);
      const navigate = useNavigate();

        const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  return (
    <DashboardLayout pageTitle={true} content={<div>
      <Search />
    </div>}>
      <Table tableData={data} tableHeaders={headers}>
        {(row) => (
          <>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.email}</td>
            <td>{row.school}</td>
            <td>{row.phoneNumber}</td>
            <td>{row.address}</td>
            <td><Dropdown icon={<BsThreeDotsVertical />}>
              <Menu.Item className='menu-item'>
                      <div onClick={() => handleOpenModal('status')}>
                        <p>Deactivate</p>
                      </div>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item className='menu-item'>
                      <div onClick={() => navigate('/users/details')}>
                        <p>View</p>
                      </div>
                    </Menu.Item>
              </Dropdown></td>
          </>
        )}

      </Table>
      <DeactivateModal isShown={openModal === 'status'} setIsShown={() => setOpenModal(false)} />
    </DashboardLayout>
  )
}

export default Users