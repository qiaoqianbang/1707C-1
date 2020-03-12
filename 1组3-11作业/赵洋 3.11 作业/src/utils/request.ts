//axios二次封装
import * as axios from 'axios'
import historyProps from '../App'
// interface IhistoryProps{
//     replace:any
// }
const Axios:any = axios
const request = Axios.create({
    baseUrl:process.env.NODE_ENV === 'production' ? 'http://49.232.77.197:8888' : '',
    timeout:3000
})
request.interceptors.request.use((config:axios.AxiosRequestConfig)=>{
    config = {
        ...config,
        headers:{
            ...config.headers,
            auth:window.localStorage.token
        }
    }
},(error:axios.AxiosError)=>{
    return Promise.reject(error)
})
request.interceptors.response.use((response:axios.AxiosResponse)=>{
    console.log(response,"response")
    return response
},(error:axios.AxiosError)=>{
    // return Promise.reject(error)
    const response = error.response
    switch(response?.status){
        case 404:{
            historyProps.replace('/404')
        }
    }
    return Promise.reject(error)
})
//get post getHotList
export default {
    get<T extends Object>(url:string,params?:T):axios.AxiosPromise{
        return request.get(url,{
            params
        })
    },
    post<T extends Object>(url:string,data?:T):axios.AxiosPromise{
        return request.post(url,data)
    }
}
