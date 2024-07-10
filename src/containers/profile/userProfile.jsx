import React from 'react'
import './profile.scss'

const UserProfile = () => {
  return (
    <>
      {' '}
      <div className='password_setting__roleInfo'>
        <div className='password_setting__role'>
          <img src='https://egopielaundry.com/my/placeholder-image/400x400' />
          <p>Super Admin</p>
        </div>
        <div className='password_setting__content'>
          <div>
            <p>Name</p>
            <p>Super Admin</p>
          </div>
          <div>
            <p>Username</p>
            <p>admin</p>
          </div>
          <div>
            <p>Email</p>
            <p>obedodume@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
