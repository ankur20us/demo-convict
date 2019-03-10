/**
 * @author Ankur Verma
 * @email ankur.verma@skillsoft.com
 * @create date 2019-03-10 20:21:59
 * @modify date 2019-03-10 20:21:59
 * @desc [description]
 */
let convict = require('convict')

let config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development', // if no 'env' param is given, 'development' is returned
    env: 'NODE_ENV', // if process.NODE_ENV is found this will be over ridden
    arg: 'env' // we can pass the arg as well in command line
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1', // default value is 127.0.0.1
    env: 'IP_ADDRESS' // if process.IP_ADDRESS is found this will be over ridden
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT', // if process.port is found this will be over ridden
    arg: 'port' // we can pass the arg as well in command line
  },
  db: {
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'server1.dev.test'
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'users'
    }
  }
})

module.exports = config
