import Mock from 'mockjs'

Mock.mock("/list",function(){
    return Mock.mock({
        'list|20':[
            {
                "id|+1":1,
                "title":"@ctitle(3,6)",
                "tickets|200-2000":0,
                "flag":false,
                "tab|0-1":0,
                "count":0
            }
        ]
    })
})