import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import './pagination.scss'
import PropTypes from 'prop-types'

const Pagination = ({
  currentPage,
  totalPage,
  changeCurrentPage,
  handlePageInput,
  forcePage,
}) => {
  const [inputValue, setInputValue] = useState(currentPage)

  useEffect(() => {
    setInputValue(currentPage)
  }, [currentPage])

  return (
    <div className='pagination'>
      <p className='pagination__count'>
        Page {currentPage} of {totalPage}
      </p>
      <div className='pagination__container'>
        <ReactPaginate
          previousLabel={totalPage > 1 ? 'Prev' : null}
          nextLabel={totalPage > currentPage ? 'Next' : null}
          breakLabel='...'
          pageCount={totalPage}
          pageRangeDisplayed={1}
          onPageChange={changeCurrentPage}
          marginPagesDisplayed={1}
          activeClassName='activePaginate'
          forcePage={forcePage}
        />
      </div>
      <div className='go_to'>
        <p>Go to page</p>
        <input
          data-testid='pagination-input'
          type='number'
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handlePageInput(inputValue)
            }
          }}
          value={inputValue}
        />
      </div>
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  changeCurrentPage: PropTypes.func,
  handlePageInput: PropTypes.func,
  forcePage: PropTypes.number,
}

export default Pagination
