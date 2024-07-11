import React from 'react'
import Modal from '../modal'

const ViewPdf = ({ isShown, setIsShown, children }) => {
  return (
     <div className='view_pdf'>
    <Modal isShown={isShown} width={750} setIsShown={setIsShown} title="Mathematics 01">
        {children}
    </Modal>
    </div>
  )
}

export default ViewPdf