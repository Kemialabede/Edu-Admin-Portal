import './search.scss'
import PropTypes from 'prop-types'

const Search = ({ placeholder }) => {
  return (
    <form
      className='form-inline float-sm-right bg--white'
    >
      <div className='container'>
        <input
          type='text'
          name='search'
          className='form-control'
          placeholder={placeholder || 'Search...'}
          value=''
        />
      </div>
    </form>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string,
}

export default Search
