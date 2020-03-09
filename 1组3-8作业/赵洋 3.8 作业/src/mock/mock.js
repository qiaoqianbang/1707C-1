// import React from 'react'
// import Mock from 'mockjs'
import list from './list.json'
// Mock.mock('/list',list)
const mock ={
    '/list'(){
        return list
    }
}
export default mock