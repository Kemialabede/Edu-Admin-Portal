import React from 'react'
import Input from '../../components/input'
import { Formik } from 'formik'
import Button from '../../components/button'

const ChangePassword = () => {
  return (
    <div className='password_setting__form'>
      <h5>Change Password</h5>
      <Formik>
        {() => (
          <div>
            <Input title='Password' type='password' />
            <Input title='New Password' type='password' />
            <Input title='Confirm Password' type='password' />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button theme='primary' size='sm'>
                Confirm Password
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}

export default ChangePassword
