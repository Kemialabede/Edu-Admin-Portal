import ToastAlert from '../components/toastAlert';

const useAlert = () => {
  const toast = (options) => ToastAlert(options);
  return { toast };
};

export default useAlert;
