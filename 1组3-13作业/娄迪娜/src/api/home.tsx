import request from '../utils/request'
const getLists=()=>request.get('/vode/hotlist')
export async function  getList(){
   const data=await getLists();
   let list=data.data.lists;
   return list

}
