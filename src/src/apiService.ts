import axios, {AxiosResponse, AxiosError} from 'axios'

interface ApiResponse{
    data:any
}
interface ApiError{

}
interface ApiParameter{
    url:string,
    params:any,
}

const BASE_URL = "http://188.166.253.125:2808";



class ApiService{
    static async getData({url, params}:ApiParameter): Promise<ApiResponse>{
        try {
            const response: AxiosResponse<ApiResponse>= await axios.get(BASE_URL+url, ...params);
            return response.data
        } catch (error) {
            throw ApiService.handleError(error as AxiosError<ApiError>)
        }
    }

    static async postData({url, params}:ApiParameter): Promise<ApiResponse>{
        try {
            const response: AxiosResponse<ApiResponse>= await axios.post(BASE_URL+url, {...params});
            return response.data
        } catch (error) {
            throw ApiService.handleError(error as AxiosError<ApiError>)
        }
    }

    static async updateData({url, params}:ApiParameter): Promise<ApiResponse>{
        try {
            const response: AxiosResponse<ApiResponse>= await axios.put(BASE_URL+url, {params});
            return response.data
        } catch (error) {
            throw ApiService.handleError(error as AxiosError<ApiError>)
        }
    }

    static async deleteData({url, params}:ApiParameter): Promise<ApiResponse>{
        try {
            const response: AxiosResponse<ApiResponse>= await axios.delete(BASE_URL+url, {params});
            return response.data
        } catch (error) {
            throw ApiService.handleError(error as AxiosError<ApiError>)
        }
    }

    private static handleError(error: AxiosError<ApiError>):Error{
        if(error.response){
            console.error('Server Error', error.response.data)
            return new Error('Server Error')
        }else if(error.request){
            console.error('Request error:', error.request);
            return new Error('Request Error');
        }else{
            console.error('Error', error.message);
            return new Error('Error');
        }
    }
}

export default ApiService