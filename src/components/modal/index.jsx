import React from 'react'
import { Dialog } from 'evergreen-ui'
import { IoClose } from 'react-icons/io5'
import './modal.scss'
import PropTypes from 'prop-types'

const Modal = ({ isShown, setIsShown, children, title, buttonText, width }) => {
  return (
    <Dialog
      title={title}
      isShown={isShown}
      onCloseComplete={() => setIsShown(false)}
      width={width}
      hasHeader={false}
      hasFooter={false}
      hasCancel={false}
      hasClose={false}
    >
      <div className='modal__line'></div>
      <div className='modal'>
        <div className='modal__heading'>
          <h4>{title}</h4>
          <IoClose
            onClick={() => setIsShown(false)}
            style={{
              cursor: 'pointer',
            }}
          />
        </div>
        {children}
        {buttonText && <div className='modal__btn'>
          <button>{buttonText}</button>
        </div>}
      </div>
    </Dialog>
  )
}

Modal.propTypes = {
  isShown: PropTypes.bool,
  setIsShown: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  width: PropTypes.string
}

export default Modal
