import './select.scss';
import PropTypes from 'prop-types';

const Select = ({ title, placeholder, options, error, onChange }) => {
  return (
    <div className="select_container">
      <p>{title}</p>
      <select onChange={onChange}>
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div> {error ? <span className="error">{error}</span> : null}</div>
    </div>
  );
};

Select.propTypes = {
  title: PropTypes.string,
};

export default Select;
