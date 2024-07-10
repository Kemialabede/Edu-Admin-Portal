import { useState } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import styles from './input.module.scss';
import classNames from 'classnames';
import { IoEye } from 'react-icons/io5';
import { IoMdEyeOff } from 'react-icons/io';

const Input = ({
  title,
  name,
  required,
  placeholder,
  type,
  disabled,
  max,
  error,
}) => {
  const [formType, setFormType] = useState(type);

  return (
    <div>
      <div className={classNames(styles.input_container)}>
        <label htmlFor={name}>{title}</label>
        <Field
          id={name}
          name={name}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          max={max}
          type={formType}
          noValidate
        />
        {type === 'password' && (
          <div
            className={styles.input_container__btn}
            type="button"
            data-testid="input-btn"
            aria-label="show password"
            onClick={() =>
              setFormType(formType === 'password' ? 'text' : 'password')
            }
          >
            {formType === 'text' ? <IoEye /> : <IoMdEyeOff />}
          </div>
        )}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  max: PropTypes.number,
  error: PropTypes.string,
};

export default Input;
