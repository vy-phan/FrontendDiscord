// định nghĩa interface response của API
export interface ApiResponse{
    sucess: boolean;
    data: any;
    message?: string;
    error?: string;
}