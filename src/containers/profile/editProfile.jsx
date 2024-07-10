import { Formik } from 'formik'
import React from 'react'
import Button from '../../components/button'
import Input from '../../components/input'

const EditProfile = () => {
  return (
    <Formik>
      {() => (
        <div className='edit_profile__container'>
          <h5>Edit Profile</h5>
          <div className='edit_profile'>
            <div className='edit_profile__upload'>
              <div>
                <div className='profilePicPreview'>
                  <img src='https://egopielaundry.com/my/placeholder-image/400x400' />
                </div>
                <div className='edit_profile__upload__btn'>
                  <Button size='lg' theme='primary'>
                    Upload Image
                  </Button>
                </div>
              </div>
              <p className='profile-small-text'>
                Supported files: <b>jpeg, jpg.</b> Image will be resized into
                400x400px{' '}
              </p>
            </div>
            <div className='edit_profile__form'>
              <Input title='Name' />
              <Input title='Email' />
            </div>
          </div>
          <div className='edit_profile__saveBtn'>
            <Button theme='primary' size='sm'>
              Save Changes
            </Button>
          </div>
        </div>
      )}
    </Formik>
  )
}

export default EditProfile
