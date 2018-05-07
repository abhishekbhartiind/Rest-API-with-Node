const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const Customer = require('../model/customer')

router.get('/', (req, res, next) => {
   Customer.find()
        .exec()
        .then(docs => {
            console.log(docs)
            res.status(200).json(docs)
        }).catch(err => {
            res.status(500).json(err)
        })  
})

router.post('/', (req, res, next) => {

    const customer = new Customer({
        _id:  new mongoose.Types.ObjectId(),
        name:  req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    });

    customer.save().then(result => {
        console.log(result)
        res.status(201).json({
            message: 'Handling Customer POST Request',
            createdCustomer: result
        }) 
    }).catch(err => {
        res.status(500).json(err)
        next(err)
    })
   
})

 module.exports = router;