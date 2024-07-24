import { toast } from 'react-toastify';
import './toastAlert.scss';
import PropTypes from 'prop-types';

const ToastAlert = ({ type, message }) => {
  return toast[type](
    <div className="toast">
      <p className="toast__message">{message}</p>
    </div>,
  );
};

ToastAlert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};

export default ToastAlert;
