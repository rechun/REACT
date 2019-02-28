/**
 * 判断是否为数组
 *
 * @param {*} obj 输入的对象
 * @returns {boolean} obj是数组返回true，否则返回false
 */
function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

/**
 * [serializeObject 以&连接对象的键值，并以字符串返回]
 *
 * @param   {Object}    obj        [输入对象]
 * @returns {String}               [返回转换后的字符串]
 */
function serializeObject(obj) {
    if (Object.prototype.toString.call(obj) !== '[object Object]') return obj;
    var resultArray = [],
        separator = '&';
    for (var prop in obj) {
        if ((0, isArray.default)(obj[prop])) {
            var toPush = [];
            for (var i = 0; i < obj[prop].length; i++) {
                toPush.push(prop + '=' + obj[prop][i]);
            }
            resultArray.push(toPush.join(separator));
        } else {
            resultArray.push(prop + '=' + obj[prop]);
        }
    }
    return resultArray.join(separator);
}

module.exports = {

    postData: function(api, options){
        api += '?' + serializeObject(options)
        return fetch(api)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                return response
            });
    },
}