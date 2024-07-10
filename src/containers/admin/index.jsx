import React, { useState } from 'react'
import DashboardLayout from '../../components/layout'
import Table from '../../components/table'
import { data, headers } from '../../mocks/admin'
import Dropdown from '../../components/dropdown'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Menu } from 'evergreen-ui'
import Button from '../../components/button'
import { IoIosAddCircleOutline } from 'react-icons/io'
import CreateAdmin from './createAdmin'
import EditAdmin from './editAdmin'
import DeactivateAdmin from './deactivateAdmin'

const Admin = () => {

   const [openModal, setOpenModal] = useState(null);

    const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
        }
  return (
    <DashboardLayout pageTitle={true} content={<div className="create-button">
        <Button onClick={() => handleOpenModal('create')}><div className="create-button__inner"><IoIosAddCircleOutline /><p>Create Admin</p></div></Button>
      </div>}>
       <Table tableData={data} tableHeaders={headers}>
        {(row) => (
          <>
            <td>{row.firstName} {row.lastName}</td>
            <td>{row.role}</td>
            <td>{row.email}</td>
            <td>{row.phoneNumber}</td>
            <td>{row.address}</td>
            <td><Dropdown icon={<BsThreeDotsVertical />}>
                         <Menu.Item className='menu-item'>
                      <div onClick={() => handleOpenModal('edit')}>
                        <p>Edit</p>
                      </div>
                    </Menu.Item>
                          <Menu.Divider />
                     <Menu.Item className='menu-item'>
                      <div onClick={() => handleOpenModal('status')}>
                        <p>Deactivate</p>
                      </div>
                    </Menu.Item>              
              </Dropdown></td>
          </>
        )}
       </Table>
       <CreateAdmin isShown={openModal === 'create'} setIsShown={() => setOpenModal(false)} />
       <EditAdmin isShown={openModal === 'edit'} setIsShown={() => setOpenModal(false)} />
       <DeactivateAdmin isShown={openModal === 'status'} setIsShown={() => setOpenModal(false)} />
    </DashboardLayout>
  )
}

export default Admin