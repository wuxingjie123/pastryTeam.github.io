define({
    "act=getList": [
        {
            delay: 1000,
            param:{
              page:1
            },
            data: {
                list: [
                    {id: '1', title: 100}
                ],
                SUMCOUNT:5
            }
        },
        {
            delay: 1000,
            param:{
                page:2
            },
            data: {
                list: [
                    {id: '2', title: 200},
                    {id: '3', title: 300}
                ],
                SUMCOUNT:5
            }
        }
    ]
});