const express = require('express')
const router = express.Router()
const {SuccessModel, ErrorModel} = require('../model/resModel')

router.get('/login', (req, res, next) => {

    res.render('login')
})

router.post('/login', (req, res, next) => {
    const {username, password} = req.body
    res.json(
        {
            username,
            password
        }
    )
})

module.exports = router