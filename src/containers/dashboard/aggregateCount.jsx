import React from 'react'
import './dashboard.scss'
import PropTypes from 'prop-types'

export const Card = ({ style, icon, count, caption, link }) => (
  <div className='dashboard-w1 aggregate_card' style={style}>
    <div className='details'>
      <div className='numbers'>
        <span className='amount'>{count}</span>
      </div>
      <div className='desciption'>
        <span className='text--small'>{caption}</span>
      </div>
      <a href={link} className='dashboard-w1__btn'>
        View All
      </a>
    </div>
  </div>
)

Card.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.node,
  count: PropTypes.string,
  caption: PropTypes.string,
  link: PropTypes.string,
}

const AggregateCount = () => {
  return (
    <div className='aggregate-count-container'>
      <Card
        style={{ background: '#7367f0' }}
        count={100}
        caption='Total Staff'
        link='/users'
      />
      <Card
        style={{ background: '#E06182' }}
        count={15}
        caption='Total Levels'
        link='/users'
      />
      <Card
        style={{ background: '#E0D261' }}
        count={25}
        caption='Total Class'
        link='/users'
      />
      <Card
        style={{ background: '#61E0CF' }}
        count={35}
        caption='Total Courses'
        link='/users'
      />
    </div>
  )
}

export default AggregateCount;