define({
    "act=getText": [
        {
            delay: 1000,
            data: {
                TEXT: 'hello world',
                Name: "Pastry Team",
                PhoneNo: '17892237893'
            }
        }
    ],
    "act=getAllData": [
        {
            delay: 1000,
            data: {
                labelData: 'Label显示内容',
                selectData: {
                    value: 0,
                    select: [
                        {option: '1|500'},
                        {option: '2|600'}
                    ]
                },
                listData: {
                    list: [
                        {id: '1', title: 500},
                        {id: '2', title: 600}
                    ]
                }
            }
        }
    ]
});