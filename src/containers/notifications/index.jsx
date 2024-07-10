import Pagination from '../../components/pagination'
import './notification.scss'
import DashboardLayout from '../../components/layout'
import Button from '../../components/button'

const SingleNotification = () => (
  <a className='notify__item ' href='#'>
    <img width="48" height="48" src="https://img.icons8.com/color/48/circled-user-male-skin-type-1-2--v1.png" alt="circled-user-male-skin-type-1-2--v1"/>
    <div className='notify__content'>
      <h6 className='title'>New member registered</h6>
      <span className='date'>
        <i className='far fa-clock'></i> 1 month ago
      </span>
    </div>
  </a>
)

const Notifications = () => {
  return (
    <DashboardLayout pageTitle={true} content={<div className="create-button">
        <Button onClick={() => {}}><div className="create-button__inner"><p>Mark all as read</p></div></Button>
      </div>}>
      <div>
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
        <SingleNotification />
      </div>
      <Pagination />
    </DashboardLayout>
  )
}

export default Notifications
