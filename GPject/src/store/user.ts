import { defineStore } from 'pinia'
import type { LoginCredentials } from '@/types/user.ts';
import { apiLogin } from "@/api/user.ts";
import { setToken} from '@/utils/token.ts';

interface User {
    username: String,
    password: String | Number,
    AccessToken:String,
    RefreshToken:String
}

export const UserStore = defineStore('user', {
    state: (): User => ({
        username: '张三',
        password: 123,
        AccessToken:'',
        RefreshToken:''
    }),
    getters: {
        user: (state) => state
    },
    actions:{
        userLogin({username,password}:LoginCredentials){
            // 模拟调后端接口
            apiLogin(username,password).then(res =>{
                if(res.data.code == 2000){
                    setToken('AccessToken',res.data.data.AccessToken);
                    setToken('RefreshToken',res.data.data.RefreshToken);
                }
            })
        }
    }
})



