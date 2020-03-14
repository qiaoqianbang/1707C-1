import request from '../utils/request'
export interface Ilogin{
    phone:string,
    password:string
}
export const login=(data:Ilogin)=>request.post('/user/login',data)