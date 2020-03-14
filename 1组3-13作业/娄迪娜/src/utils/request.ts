//axios二次封装
import * as axios from 'axios'
import historyProps from '../App'
// interface IhistoryProps{
//     replace:any
// }
const Axios:any=axios

//创建axios实例
const request=Axios.create({
    //判断当前开发环境
    baseUrl:process.env.NODE_ENV === 'production'?'http://49.232.77.197:8888':'',
    //延迟
    timeout:3000
})
// 拦截器
request.interceptors.request.use((config:axios.AxiosRequestConfig)=>{
    config={
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
    console.log(Response,"response")
    return response.data
},(error:axios.AxiosError)=>{
    // return Promise.reject(error)
    const response=error.response;
    alert(response?.data.msg)
    switch(response?.status){
        case 404:{
            historyProps.replace('/404')
        }
        case 401:{
            historyProps.replace('/login')
        }
    }
    return Promise.reject(error)
})
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
