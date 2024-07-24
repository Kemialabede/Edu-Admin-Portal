import classNames from 'classnames';
import { Icon } from '@iconify-icon/react';
import styles from './button.module.scss';
import PropTypes from 'prop-types';

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  loader,
  theme,
  size,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        styles.btn,
        styles[`btn__${theme}`],
        styles[`btn__${theme}__${size}`],
        loading ? styles.loading : styles.btn,
      )}
    >
      {loading ? (
        <div className="">
          <p>{loader ? loader : null}</p>{' '}
          <Icon
            icon="eos-icons:three-dots-loading"
            style={{ color: 'white' }}
            size={50}
            height={20}
            width={20}
          />
        </div>
      ) : (
        <>
          <span>
            <p>{children}</p>
          </span>
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  loader: PropTypes.node,
  theme: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
