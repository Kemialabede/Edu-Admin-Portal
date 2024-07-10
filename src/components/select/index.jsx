import React from 'react'
import './select.scss'
import PropTypes from 'prop-types'

const Select = ({ title }) => {
  return (
    <div className='select_container'>
      <p>{title}</p>
      <select></select>
    </div>
  )
}

Select.propTypes = {
  title: PropTypes.string,
}

export default Select