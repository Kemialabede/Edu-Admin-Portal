import DashboardLayout from "../../components/layout"
import Table from "../../components/table";
import { data, headers } from "../../mocks/programs";
import Button from "../../components/button";
import './programs.scss';
import { IoIosAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import CreateProgram from "./createProgram";
import Dropdown from "../../components/dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Menu } from "evergreen-ui";
import DeleteProgram from "./deleteProgram";
import EditProgram from "./editProgram";

const Programs = () => {
  const [openModal, setOpenModal] = useState(null);

    const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  return (
    <DashboardLayout pageTitle={true} content={<div className="create-button">
        <Button onClick={() => handleOpenModal('create')}><div className="create-button__inner"><IoIosAddCircleOutline /><p>Create Class</p></div></Button>
      </div>}>
      
      <Table tableData={data} tableHeaders={headers}>
        {(row) => (
          <>
            <td>{row.programName}</td>
            <td>{row.level}</td>
            <td>{row.dateCreated}</td>
            <td><Dropdown icon={<BsThreeDotsVertical />}>
              <Menu.Item className='menu-item'>
                      <div onClick={() => handleOpenModal('edit')}>
                        <p>Edit</p>
                      </div>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item className='menu-item'>
                      <div onClick={() => handleOpenModal('delete')}>
                        <p>Delete</p>
                      </div>
                    </Menu.Item>
              </Dropdown></td>
          </>
        )}

      </Table>
      <CreateProgram isShown={openModal === 'create'} setIsShown={() => setOpenModal(false)} />
      <DeleteProgram isShown={openModal === 'delete'} setIsShown={() => setOpenModal(false)} />
      <EditProgram isShown={openModal === 'edit'} setIsShown={() => setOpenModal(false)} />
    </DashboardLayout>
  )
}

export default Programs