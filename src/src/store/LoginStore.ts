
import {action, computed, observable} from 'mobx'
import ApiService from '../apiService';

class LoginStore{
    
    @observable myToken:LogResModel={token:''};

    
    @action
    async loginAdmin({username, password}:LoginModel){
        try {
            const result = await ApiService.postData({url:"/api/login", params:{username,password}})
            this.myToken = result.data
          } catch (error) {
            console.info("postLoginError", error)
          }
    }

    @computed get appToken(){
        return this.myToken
    }


}

export default LoginStore

interface LoginModel{username:string, password:string}
interface LogResModel{token?:string, tokenExp?:number}