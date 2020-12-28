/* 封装思路 
    localStorage保存接口
    setStorage(要保存的键名String,要保存的值)
    会自动加入JSON.stringify
*/
export const setStorage = function (key, value) {
    if (!key || key == "") {
        console.error("setStorage 方法---键值不可为空或格式错误");
        return;
    }
    localStorage.setItem(key, JSON.stringify(value))
}
/* 封装思路 
    localStorage获取接口
    getStorage(要获取的键名String)
    会自动加入JSON.parse
*/
export const getStorage = function (key) {
    if (!key || key == "") {
        console.error("getStorage 方法---键值不可为空或格式错误");
        return;
    }
    return JSON.parse(localStorage.getItem(key))
}
/* 封装思路 
    localStorage删除接口
    removeStorage(要删除的键名String)
*/
export const removeStorage = function (key) {
    if (!key || key == "") {
        console.error("removeStorage 方法---键值不可为空或格式错误");
        return;
    }
    localStorage.removeItem(key)
}
/* 封装思路 
    localStorage清空接口
    clearStorage()
    清空localStorage储存的信息
*/
export const clearStorage = function () {
    localStorage.clear()
}