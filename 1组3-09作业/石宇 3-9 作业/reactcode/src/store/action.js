import axios from 'axios'

export function getList(){
    return function(dispatch){
        return axios.get('/list').then(res=>{
            dispatch({
                type:'GET_DATA',
                value:res.data.list
            })
        })
    }
}