/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-09-21 18:27:51
 * @LastEditors: Pony
 * @LastEditTime: 2020-09-21 18:48:21
 */
const singnList = [
    {
        ur: '1222',
        id: '111',
        fileId: '2333',
        type: 'phtoto'
    },
    {
        ur: '1222',
        id: '111',
        fileId: '2333',
        type: 'idCardaPhoto'
    },
    {
        ur: '1222',
        id: '111',
        fileId: '2333',
        type: 'idCardbPhoto'
    },
];
let count = 0;
function getData() {
    count = 0
    savevalue();
    setTimeout(_=>savevalue(),1000)
    setTimeout(_=>savevalue(),1000)
}

function savevalue() {
    const keys = ['phtoto','idCardaPhoto','idCardbPhoto'];
    changeNums(keys[count],111)
    count++;
}
function changeNums(keys,flag) {
    console.log(keys,flag)
}
getData();