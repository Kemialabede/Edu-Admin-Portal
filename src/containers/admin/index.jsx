import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout';
import Table from '../../components/table';
import { headers } from '../../mocks/admin';
import Dropdown from '../../components/dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Menu } from 'evergreen-ui';
import Button from '../../components/button';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CreateAdmin from './createAdmin';
import EditAdmin from './editAdmin';
import { useFetchAllAdmins } from '../../hooks/queries/useFetchAllAdmins';
import DeleteAdmin from './deleteAdmin';
import { useNavigate } from 'react-router-dom';
import getTotalPages from '../../utilities/getTotalPages';
import { usePermissionContext } from '../../contexts/permissionContexts';
import { useUserContext } from '../../contexts/userContexts.jsx';
import DeactivateAdmin from './deactivateAdmin.jsx';

const Admin = () => {
  const [openModal, setOpenModal] = useState(null);
  const [currentRow, setCurrentRow] = useState('');
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { setSelectedPermissions } = usePermissionContext();

  const { userData } = useUserContext();
  const permissions = userData?.admin?.permissions;

  const { data, isFetching, refetch } = useFetchAllAdmins({
    query: {
      page: page,
    },
  });

  useEffect(() => {
    refetch();
  }, [page]);

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };
  return (
    <DashboardLayout
      pageTitle={true}
      content={
        <>
          {(permissions?.includes('create_admin') || permissions === 'all') && (
            <div className="create-button">
              <Button onClick={() => handleOpenModal('create')}>
                <div className="create-button__inner">
                  <IoIosAddCircleOutline />
                  <p>Create Admin</p>
                </div>
              </Button>
            </div>
          )}
        </>
      }
    >
      <Table
        tableData={data?.data}
        tableHeaders={headers}
        isLoading={isFetching}
        currentPage={page}
        forcePage={page - 1}
        totalPage={getTotalPages(Number(data?.meta?.total), 15)}
        changeCurrentPage={(num) => setPage(num?.selected + 1)}
        handlePageInput={(e) => setPage(e)}
        noPagination
      >
        {(row) => (
          <>
            <td>
              {row.first_name} {row.last_name}
            </td>
            <td>{row.role}</td>
            <td>{row.email}</td>
            <td>
              <Dropdown icon={<BsThreeDotsVertical />}>
                {(permissions?.includes('deactivate_admin') ||
                  permissions === 'all') && (
                  <Menu.Item className="menu-item">
                    <div
                      onClick={() => {
                        handleOpenModal('status');
                        setCurrentRow(row);
                      }}
                    >
                      <p>
                        {row.status === 'active' ? 'Deactivate' : 'Activate'}
                      </p>
                    </div>
                  </Menu.Item>
                )}
                <Menu.Divider />
                {(permissions?.includes('delete_admin') ||
                  permissions === 'all') && (
                  <Menu.Item className="menu-item">
                    <div
                      onClick={() => {
                        handleOpenModal('delete');
                        setCurrentRow(row);
                      }}
                    >
                      <p>Delete</p>
                    </div>
                  </Menu.Item>
                )}
                <Menu.Divider />
                {(permissions?.includes('manage_permission') ||
                  permissions === 'all') && (
                  <Menu.Item className="menu-item">
                    <div
                      onClick={() => {
                        setSelectedPermissions(row.permissions);
                        sessionStorage.setItem('permissions', row.permissions);
                        navigate(`/permissions/${row.uuid}`);
                      }}
                    >
                      <p>Permissions</p>
                    </div>
                  </Menu.Item>
                )}
              </Dropdown>
            </td>
          </>
        )}
      </Table>
      <CreateAdmin
        isShown={openModal === 'create'}
        setIsShown={() => setOpenModal(false)}
      />
      <EditAdmin
        isShown={openModal === 'edit'}
        setIsShown={() => setOpenModal(false)}
      />
      <DeleteAdmin
        isShown={openModal === 'delete'}
        setIsShown={() => setOpenModal(false)}
        currentId={currentRow?.uuid}
      />
      <DeactivateAdmin
        isShown={openModal === 'status'}
        setIsShown={() => setOpenModal(false)}
        currentRow={currentRow}
      />
    </DashboardLayout>
  );
};

export default Admin;
