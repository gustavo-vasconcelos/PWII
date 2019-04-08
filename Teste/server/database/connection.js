const mysql = require('mysql')
const con = mysql.createPool({
    host: 'webitcloud.net',
    user: 'webitclo_teste',
    password: '1J15,~H{H)oT',
    database: 'webitclo_teste'
})

module.exports = con