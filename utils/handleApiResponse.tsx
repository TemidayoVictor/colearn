export const handleApiResponse = (response: any) => {
    const { status, message, data, errors } = response?.data || {};
  
    if (status === "success") {
      return { success: true, message, data };
    }
  
    return {
      success: false,
      message: message || "Something went wrong",
      errors: errors || {},
    };
};

export const handleApiError = (error: any) => {
    return {
      success: false,
      message: error?.message || "Unexpected error occurred",
      errors: {},
    };
};
  