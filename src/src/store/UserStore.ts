
import {action, makeAutoObservable, observable} from 'mobx'
import ApiService from '../apiService';


interface IRequestEmployee{
    username:string,
    email:string,
    phone:string,
}
export class UserStore{
    constructor(){
        makeAutoObservable(this)
    }
    @observable 
    dataEmployee = [];
    
    @action
    getDataEmployee=async(token:string)=>{
        try {
            try {
                const result = await ApiService.getData({url:"/api/auth/employee-regist", token})
                this.dataEmployee = result.data
              } catch (error) {
                console.info("postLoginError", error)
              }
        } catch (error) {
            console.info("ERROR getDataEmployee", error)
        }
    }

    

    @action
    async addDataEmployee(params:IRequestEmployee,token:string){
        try {
            try {
                const result = await ApiService.postData({url:"/api/auth/employee-regist",params , token})
                if(result){
                    await this.getDataEmployee(token)
                }
              } catch (error) {
                console.info("postLoginError", error)
              }
        } catch (error) {
            console.info("ERROR getDataEmployee", error)
        }
    }

}