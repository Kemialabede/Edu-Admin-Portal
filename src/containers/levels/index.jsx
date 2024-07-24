import DashboardLayout from '../../components/layout';
import Table from '../../components/table';
import { headers } from '../../mocks/levels';
import Button from '../../components/button';
import './levels.scss';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CreateLevel from './createLevel';
import { useEffect, useState } from 'react';
import Dropdown from '../../components/dropdown';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Menu } from 'evergreen-ui';
import DeleteLevel from './deleteLevel';
import EditLevel from './editLevel';
import Search from '../../components/search';
import { useFetchLevels } from '../../hooks/queries/useFetchLevels';
import { useDebounce } from 'use-debounce';
import getTotalPages from '../../utilities/getTotalPages';
import { useUserContext } from '../../contexts/userContexts';

const Levels = () => {
  const [openModal, setOpenModal] = useState(null);
  const [currentLevel, setCurrentLevel] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [value] = useDebounce(searchValue, 1000);
  const [page, setPage] = useState(1);

  const { data, isFetching, refetch } = useFetchLevels({
    query: {
      search: value,
      page: page,
    },
  });

  const { userData } = useUserContext();
  const permissions = userData?.admin?.permissions;

  useEffect(() => {
    refetch();
  }, [value, page]);

  const handleOpenModal = (modalName) => {
    setOpenModal(modalName);
  };

  const handleSearch = (e) => {
    setSearchValue(e?.target?.value);
  };

  return (
    <DashboardLayout
      pageTitle={true}
      content={
        <>
          {(permissions?.includes('create_level') || permissions === 'all') && (
            <div className="create-button">
              <Button onClick={() => handleOpenModal('create')}>
                <div className="create-button__inner">
                  <IoIosAddCircleOutline />
                  <p>Create Level</p>
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
            <td>{row.name}</td>
            <td>{row.created_at}</td>
            <td>{row.created_by}</td>
            <td>
              <Dropdown icon={<BsThreeDotsVertical />}>
                {(permissions?.includes('edit_level') ||
                  permissions === 'all') && (
                  <Menu.Item className="menu-item">
                    <div
                      onClick={() => {
                        handleOpenModal('edit');
                        setCurrentLevel(row);
                      }}
                    >
                      <p>Edit</p>
                    </div>
                  </Menu.Item>
                )}
                <Menu.Divider />
                {(permissions?.includes('delete_level') ||
                  permissions === 'all') && (
                  <Menu.Item className="menu-item">
                    <div
                      onClick={() => {
                        handleOpenModal('delete');
                        setCurrentLevel(row);
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
      <CreateLevel
        isShown={openModal === 'create'}
        setIsShown={() => setOpenModal(false)}
      />
      <DeleteLevel
        isShown={openModal === 'delete'}
        setIsShown={() => setOpenModal(false)}
        currentId={currentLevel?.uuid}
      />
      <EditLevel
        isShown={openModal === 'edit'}
        setIsShown={() => setOpenModal(false)}
        currentLevel={currentLevel}
      />
    </DashboardLayout>
  );
};

export default Levels;
