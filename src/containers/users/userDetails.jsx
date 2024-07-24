import DashboardLayout from '../../components/layout';
import './users.scss';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchSingleStaff } from '../../hooks/queries/useFetchSingleStaff';
import PageLoader from '../../components/loader/pageLoader';

const UserDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { data, isFetching } = useFetchSingleStaff(params?.id);

  return (
    <DashboardLayout>
      {isFetching ? (
        <PageLoader />
      ) : (
        <>
          <div className="userDetails__header" onClick={() => navigate(-1)}>
            <IoArrowBack style={{ width: '25px', height: '25px' }} />
            <p>User Details</p>
          </div>
          <div className="userDetails">
            <div className="userDetails__profile">
              <div className="userDetails__profile__firstSection">
                <img
                  width="150"
                  height="150"
                  src="https://img.icons8.com/color/80/circled-user-male-skin-type-1-2--v1.png"
                  alt="User profile"
                />
                <p className="userDetails__profile__name">
                  {data?.first_name} {data?.last_name}
                </p>
                <p className="userDetails__profile__email">{data?.email}</p>
              </div>
              <div className="userDetails__profile__secondSection">
                <div>
                  <p>First Name</p>
                  <p>{data?.first_name}</p>
                </div>
                <div>
                  <p>Last Name</p>
                  <p>{data?.last_name}</p>
                </div>
                <div>
                  <p>Phone Number</p>
                  <p>{data?.phone || '-'}</p>
                </div>
                <div>
                  <p>Email</p>
                  <p>{data?.email}</p>
                </div>
                <div>
                  <p>School Name</p>
                  <p>{data?.school_name}</p>
                </div>
                <div>
                  <p>Address</p>
                  <p>{data?.address || '-'}</p>
                </div>
              </div>
            </div>

            <div className="userDetails__stats">
              <h3>User Stats</h3>
              <div className="userDetails__stats__grid">
                <div>
                  <p>Status</p>
                  <p
                    style={
                      data?.status === 'Deactivated' ? { color: 'red' } : {}
                    }
                  >
                    {data?.status}
                  </p>
                </div>
                <div>
                  <p>Email Verified</p>
                  <p>{data?.email_verified === true ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>

            <div className="userDetails__courses">
              <h3>Classes</h3>
              <div className="userDetails__courses__grid">
                {data?.level?.classes?.map((item) => {
                  return (
                    <div key={item.uuid}>
                      <p>Class Name</p>
                      <p>{item.class_name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="userDetails__courses">
              <h3>Teaching Courses</h3>
              <div className="userDetails__courses__grid">
                {data?.class?.courses?.map((item) => {
                  return (
                    <div key={item.uuid}>
                      <p>Course Name</p>
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div className="userDetails__activities">
          <h3>Recent Activities</h3>
          <ul>
            <li>Graded assignments - 2 hours ago</li>
            <li>Conducted a lecture on Physics - 5 hours ago</li>
            <li>Met with parents - 1 day ago</li>
            <li>Uploaded new course materials - 3 days ago</li>
          </ul>
        </div> */}
          </div>
        </>
      )}
    </DashboardLayout>
  );
};

export default UserDetails;
