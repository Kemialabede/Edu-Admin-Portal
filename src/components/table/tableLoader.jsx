import './table.scss';

export const TableLoader = ({ headers }) => (
  <div className="skeleton">
    <div className="skeleton__head" />
    {headers?.slice(0, 4).map((header) => (
      <div key={header?.id} className="skeleton__row">
        {headers?.map((header) => (
          <div key={header?.id} className="skeleton__item" />
        ))}
      </div>
    ))}
  </div>
);

export default TableLoader;
