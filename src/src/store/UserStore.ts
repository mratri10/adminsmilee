
import {action, makeAutoObservable, observable} from 'mobx'
import { RootStore } from './store';
import ApiService from '../apiService';

class UserStore{
    rootStore:RootStore
    @observable userId:string='';
    
    constructor(rootStore: RootStore){
        makeAutoObservable(this, {rootStore: false});
        this.rootStore = rootStore
    }

    
    @action
    async loginAdmin({username, password}:LoginModel){
        try {
            try {
                const result = await ApiService.postData({url:"/api/login", params:{username,password}})
                
              } catch (error) {
                console.info("postLoginError", error)
              }
        } catch (error) {
            
        }
    }


}

export default UserStore

interface LoginModel{username:string, password:string}