import './table.scss'
import Placeholder from '../../assets/icons/placeholder.png'
import Pagination from '../../components/pagination'
import PropTypes from 'prop-types'

const Table = ({ tableHeaders, tableData, children, mapKey, noPagination }) => {
  return (
    <div
      style={{
        boxShadow: '0 0.75rem 1.5rem rgba(18, 38, 63, 0.03)',
        border: '1px solid #e8e8e8',
        width: 'auto',
        marginTop: '-2px',
      }}
    >
      <table style={{ width: '100%' }} className='table'>
        <thead className='table__header'>
          <tr>
            {tableHeaders?.map((header) => (
              <th key={header?.key}>{header.text}</th>
            ))}
          </tr>
        </thead>
        <tbody className='table__body'>
          {tableData?.map((row, index) => {
            return <tr key={row?.[mapKey] ?? index}>{children(row, index)}</tr>
          })}
          {!tableData?.length && (
            <>
              <tr>
                <td colSpan='100%' className='table__empty'>
                  {<img src={Placeholder} alt='' />} <p>No data found</p>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      {!noPagination && <Pagination />}
    </div>
  )
}

Table.propTypes = {
  tableHeaders: PropTypes.array,
  tableData: PropTypes.array,
  children: PropTypes.node,
  mapKey: PropTypes.string,
  noPagination: PropTypes.bool,
}

export default Table
