import React from 'react';
import DashboardLayout from '../../components/layout';
import './users.scss';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const navigate = useNavigate()
  return (
    <DashboardLayout>
      <div className='userDetails__header' onClick={() => navigate(-1)}>
        <IoArrowBack style={{ width: '25px', height: '25px' }} />
        <p>User Details</p>
      </div>
      <div className="userDetails">
        <div className="userDetails__profile">
          <div className="userDetails__profile__firstSection">
            <img width="150" height="150" src="https://img.icons8.com/color/80/circled-user-male-skin-type-1-2--v1.png" alt="User profile"/>
            <p className="userDetails__profile__name">Diane Cooper</p>
            <p className="userDetails__profile__email">diana.cooper@example.com</p>
          </div>
          <div className="userDetails__profile__secondSection">
            <div>
              <p>First Name</p>
              <p>Diana</p>
            </div>
            <div>
              <p>Last Name</p>
              <p>Cooper</p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <p>Email</p>
              <p>diana.cooper@example.com</p>
            </div>
            <div>
              <p>Address</p>
              <p>123 Main St, Anytown, USA</p>
            </div>
            <div>
              <p>Date of Birth</p>
              <p>January 1, 1990</p>
            </div>
            <div>
              <p>Occupation</p>
              <p>Software Engineer</p>
            </div>
            <div>
              <p>Company</p>
              <p>Example Corp</p>
            </div>
            <div>
              <p>Website</p>
              <p>www.example.com</p>
            </div>
          </div>
        </div>

        <div className="userDetails__stats">
          <h3>User Stats</h3>
          <div className="userDetails__stats__grid">
            <div>
              <p>Status</p>
              <p>Active</p>
            </div>
            <div>
              <p>Email Verified</p>
              <p>Yes</p>
            </div>
          </div>
        </div>

        <div className="userDetails__courses">
          <h3>Teaching Courses</h3>
          <div className="userDetails__courses__grid">
            <div>
              <p>Course Name</p>
              <p>Introduction to Programming</p>
            </div>
            <div>
              <p>Course Name</p>
              <p>Advanced Mathematics</p>
            </div>
            <div>
              <p>Course Name</p>
              <p>Physics 101</p>
            </div>
          </div>
        </div>

        {/* <div className="userDetails__classes">
          <h3>Assigned Classes</h3>
          <div className="userDetails__classes__grid">
            <div>
              <p>Class Name</p>
              <p>Grade 10 - Section A</p>
            </div>
            <div>
              <p>Class Name</p>
              <p>Grade 11 - Section B</p>
            </div>
          </div>
        </div> */}

        <div className="userDetails__activities">
          <h3>Recent Activities</h3>
          <ul>
            <li>Graded assignments - 2 hours ago</li>
            <li>Conducted a lecture on Physics - 5 hours ago</li>
            <li>Met with parents - 1 day ago</li>
            <li>Uploaded new course materials - 3 days ago</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UserDetails;
