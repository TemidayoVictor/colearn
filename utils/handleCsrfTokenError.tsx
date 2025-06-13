import { showErrorToast } from "./toastTypes";

export const handleCsrfError = (response: any, router: any) => {
  const message = response?.message?.toLowerCase?.();
  const status = response?.status;
  
  const isCsrfError =
    status === 419 ||
    (status === 401 && message?.includes('csrf')) ||
    message?.includes('token mismatch') || message?.includes('unauthenticated');

  if (isCsrfError) {
    console.warn('CSRF/session expired, redirecting to login...');
    showErrorToast("Session Expired. Please Log in");
    router.push('/authentication/login');
    return true;
  }

  return false;
};
