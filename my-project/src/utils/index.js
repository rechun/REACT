/**
 * [serializeObject 以&连接对象的键值，并以字符串返回]
 *
 * @param   {Object}    obj        [输入对象]
 * @returns {String}               [返回转换后的字符串]
 * {a: 1, b:2} => a=1&b=2
 */
function serializeObject(obj) {
      if (Object.prototype.toString.call(obj) !== '[object Object]'){
          console.error('参数错误');
      }
      let separator = '&', resultArray= [];
      for(let key in obj){
          key += `=${obj[key]}`
          resultArray.push(key)
      }
      return resultArray.join(separator);
  }
  module.exports = {
      postData: function(api, options){
          console.log(options);
          api += '?' + serializeObject(options)
          return fetch(api)
              .then(res => res.json())
              .catch(error => console.error('Error:', error))
              .then(response => {
                  return response
              });
      },
  }