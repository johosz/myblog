const xss = require('xss')
const {exec} = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `
    select * from blogs where 1=1
    `
    if (author) {
        sql += `and author=${author}`
    }

    if (keyword) {
        sql += `and title like '%${keyword}%'`
    }

    return exec(sql)
}

const getDetail = (id) => {
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })

}

module.exports = {
    getList,
    getDetail
}