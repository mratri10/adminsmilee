import LoginStore from "./LoginStore";
import UserStore from "./UserStore";

export class RootStore{
    userStore: UserStore;
    loginStore:LoginStore
    constructor(){
        this.userStore = new UserStore(this);
        this.loginStore = new LoginStore(this);
    }
}

export const store = new RootStore()