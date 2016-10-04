define({
    "act=getAllData2": [
        {
            delay: 1000,
            data: {
                mylabel: 'Label',
                myselect: {
                    select: [
                        {option: '1|500'},
                        {option: '2|600'}
                    ]},
                mylist: {
                    list: [
                        {id: '1', title: 500},
                        {id: '2', title: 600}
                    ]
                },
                mypopupselect: {
                    showCancel:true,
                    items: [
                        {id: '1', title: 5000},
                        {id: '2', title: 6000}
                    ]
                }
            }
        }
    ]
});