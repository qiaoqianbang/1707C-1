import Mock from 'mockjs'

let data=Mock.mock({
    "list|3":[
        {
            "id|+1":1,
            "title":"@ctitle(4,6)",
            "imgs":"@image(80x80,@color)",
            "children|4":[
                {
                    "id|+1":1,
                    "title":"@ctitle(3,5)",
                    "imgs":"@image(80x80,@color)",
                    "price|10-200":1,
                    "count":0
                }
            ]
        }
    ]
})

Mock.mock('/list',function(){
    return data
})