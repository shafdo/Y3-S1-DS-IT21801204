import { toast } from 'react-toastify';

export const notify = (message, theme = '') => {
  switch (theme) {
    case 'success':
      return toast.success(message);

    case 'error':
      return toast.error(message);

    case 'info':
      return toast.info(message);
    case 'warn':
      return toast.warn(message);

    default:
      toast(message);
  }
};
