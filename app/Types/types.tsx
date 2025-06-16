export type Experience = {
    title: string;
    company: string;
    duration: string;
    description: string;
};

export type Bank = {
    bank: string;
    account_number: string;
    account_name: string;
}

export type ApiResponseType =
  | { success: true; message: any; data: any }
  | { success: false; message: any; errors: any };