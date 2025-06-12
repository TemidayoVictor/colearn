import { toast } from 'react-toastify';

export const showErrorToast = (
    message: string | string[] | { [key: string]: string[] },
    fallback = 'Something went wrong'
  ) => {
    const finalMessage =
      typeof message === 'string'
        ? message
        : Array.isArray(message)
        ? message[0]
        : typeof message === 'object'
        ? Object.values(message).flat()[0]
        : fallback;
  
    toast.error(finalMessage);
  };