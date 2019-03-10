/**
 * @author Ankur Verma
 * @email ankur.verma@skillsoft.com
 * @create date 2019-03-10 20:20:54
 * @modify date 2019-03-10 20:20:54
 * @desc [description]
 */
let config = require('./config')
console.log('>>>>> config.get("port")', config.get('port'))
console.log('>>>>> config.get("port")', config.get('env'))

// you can pass the values in a --<variable_name> <value> format
