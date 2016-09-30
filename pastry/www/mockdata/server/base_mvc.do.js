define({
    "act=getText": [
        {
            delay: 1000,
            data: {
                TEXT: 'hello world Pastry Team',
            }
        }
    ],
    "act=getSecondText": [
        {
            delay: 2000,
            result: 0,
            param: {
                USERNAME: "citic",
                PASSWORD: "112233"
            },
            data: {
                TEXT1: "Hello Citic A!",
                TEXT2: "Hello Citic B!"
            }
        },
        {
            data: {
                err: "模拟出错信息。"
            }
        }
    ]
});