const express = require('express')
const router = express.Router()
const {SuccessModel, ErrorModel} = require('../model/resModel')
const {getList, getDetail} = require('../controller/blog')

router.get('/list', (req, res, next) => {
    // const author = req.query.author || ''
    // const keyword = req.query.keyword || ''

    const {author, keyword} = req.query

    return getList(author, keyword).then(data => {
        res.render('list', {data: data})
    })


})

router.get('/detail', (req, res, next) => {
    const id = req.query.id || ''
    return getDetail(id).then(data => {
        res.render('detail', {data: data})
    })
})



module.exports = router