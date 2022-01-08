const express = require('express')
const fs = require('fs')
const router = express.Router()
const {SuccessModel, ErrorModel} = require('../model/resModel')




router.get('/todo', (req, res, next) => {

    res.json({
        data: [{
            id: 1,
            title: '做饭'
        }, {
            id: 2,
            title: '做饭'
        },
            {
                id: 3,
                title: '做饭'
            }],
        errno: 0
    })


})

module.exports = router