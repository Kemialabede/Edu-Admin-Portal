import DashboardLayout from "../../components/layout"
import Table from "../../components/table";
import { data, headers } from "../../mocks/levels";
import Button from "../../components/button";
import './levels.scss';
import { IoIosAddCircleOutline } from "react-icons/io";
import CreateLevel from "./createLevel";
import { useState } from "react";
import Dropdown from "../../components/dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Menu } from "evergreen-ui";
import DeleteLevel from "./deleteLevel";
import EditLevel from "./editLevel";
import Search from "../../components/search";

const Levels = () => {
   const [openModal, setOpenModal] = useState(null);

        const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };
  return (
    <DashboardLayout pageTitle={true} content={<div className="create-button">
        <Button onClick={() => handleOpenModal('create')}><div className="create-button__inner"><IoIosAddCircleOutline /><p>Create Level</p></div></Button>
      </div>}>
      <Search />
      <br />
      <Table tableData={data} tableHeaders={headers}>
        {(row) => (
          <>
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
        <CreateLevel isShown={openModal === 'create'} setIsShown={() => setOpenModal(false)} />
         <DeleteLevel isShown={openModal === 'delete'} setIsShown={() => setOpenModal(false)} /> 
          <EditLevel isShown={openModal === 'edit'} setIsShown={() => setOpenModal(false)} /> 
    </DashboardLayout>
  )
}

export default Levels