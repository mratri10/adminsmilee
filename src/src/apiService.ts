import axios, {AxiosResponse, AxiosError} from 'axios'
import { useAuth } from '../hooks/useAuth';

interface ApiResponse{
    data:any
}
interface ApiError{

}
interface ApiParameter{
    url:string,
    params?:any,
    token?:string,
}

const BASE_URL = "http://188.166.253.125:2808";



class ApiService{
    static async getData({url, token}:ApiParameter): Promise<ApiResponse>{
        try {
            const response: AxiosResponse<ApiResponse>= await axios.get(BASE_URL+url, {
                headers:{
                    "X-API-TOKEN":token
                }
            });
            return response.data
        } catch (error) {
            const errorCode = error as AxiosError<ApiError>
            if(errorCode.response?.status === 401){
                window.location.href = "/login";
            }
            throw ApiService.handleError(errorCode)
        }
    }

    static async postData({url, params, token}:ApiParameter): Promise<ApiResponse>{
        
        try {
            const response: AxiosResponse<ApiResponse>= await axios.post(BASE_URL+url, {...params},{
                headers:{
                    "X-API-TOKEN":token
                }
            });
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