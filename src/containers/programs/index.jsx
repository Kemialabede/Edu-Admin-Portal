import DashboardLayout from '../../components/layout';
import Table from '../../components/table';
import { headers } from '../../mocks/programs';
import Button from '../../components/button';
import './programs.scss';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useEffect, useState } from 'react';
import CreateProgram from './createProgram';
import Dropdown from '../../components/dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Menu } from 'evergreen-ui';
import DeleteProgram from './deleteProgram';
import EditProgram from './editProgram';
import Search from '../../components/search';
import { useFetchClasses } from '../../hooks/queries/useFetchClasses';
import { useDebounce } from 'use-debounce';
import getTotalPages from '../../utilities/getTotalPages';
import { useUserContext } from '../../contexts/userContexts';

const Programs = () => {
  const [openModal, setOpenModal] = useState(null);
  const [currentRow, setCurrentRow] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [value] = useDebounce(searchValue, 1000);
  const [page, setPage] = useState(1);

  const { data, isFetching, refetch } = useFetchClasses({
    query: {
      search: value,
      page: page,
    },
  });

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  useEffect(() => {
    refetch();
  }, [value, page]);

  const handleSearch = (e) => {
    setSearchValue(e?.target?.value);
  };

  const { userData } = useUserContext();
  const permissions = userData?.admin?.permissions;

  return (
    <DashboardLayout
      pageTitle={true}
      content={
        <>
          {(permissions?.includes('create_class') || permissions === 'all') && (
            <div className="create-button">
              <Button onClick={() => handleOpenModal('create')}>
                <div className="create-button__inner">
                  <IoIosAddCircleOutline />
                  <p>Create Class</p>
                </div>
              </Button>
            </div>
          )}
        </>
      }
    >
      <Search onChange={handleSearch} />
      <br />

      <Table
        tableData={data?.data}
        tableHeaders={headers}
        isLoading={isFetching}
        currentPage={page}
        forcePage={page - 1}
        totalPage={getTotalPages(Number(data?.meta?.total), 15)}
        changeCurrentPage={(num) => setPage(num?.selected + 1)}
        handlePageInput={(e) => setPage(e)}
      >
        {(row) => (
          <>
            <td>{row.class_name}</td>
            <td>{row.level_name}</td>
            <td>{row.created_at}</td>
            <td>{row.created_by}</td>
            <td>
              <Dropdown icon={<BsThreeDotsVertical />}>
                {(permissions?.includes('edit_class') ||
                  permissions === 'all') && (
                  <Menu.Item className="menu-item">
                    <div
                      onClick={() => {
                        handleOpenModal('edit');
                        setCurrentRow(row);
                      }}
                    >
                      <p>Edit</p>
                    </div>
                  </Menu.Item>
                )}
                <Menu.Divider />
                {(permissions?.includes('delete_class') ||
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
              </Dropdown>
            </td>
          </>
        )}
      </Table>
      <CreateProgram
        isShown={openModal === 'create'}
        setIsShown={() => setOpenModal(false)}
      />
      <DeleteProgram
        isShown={openModal === 'delete'}
        setIsShown={() => setOpenModal(false)}
        currentId={currentRow?.uuid}
      />
      <EditProgram
        isShown={openModal === 'edit'}
        setIsShown={() => setOpenModal(false)}
        currentRow={currentRow}
      />
    </DashboardLayout>
  );
};

export default Programs;
