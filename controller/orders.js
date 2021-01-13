const ordersRouter=require('express').Router();
const { response}= require('express')
const Orders = require('../models/orders')

//  allows you to place an order//
ordersRouter.post('/Order', async (request, response, next) =>{
    const {name, transactionid, amount, collections, order, paymentnumber }=request.body;
    console.log(name,transactionid, amount, collections, order, paymentnumber)
    if (name,transactionid,amount,collections, order && paymentnumber){
        const ordersCount= await Orders.countDocuments();

        const newOrder = new Orders({
            id: ordersCount + 1,
            name:name,
            transactionid:transactionid,
            amount:amount,
            collections:collections,
            paymentnumber: paymentnumber,
            order:order

        })

        newOrder.save()
        .then (res =>{
            response.status(201).send(res);

        })
        .catch(err => {
            console.log(err)
            response.sendStatus(501);
        })
    }
    else{
        response.status(400).send({message:"Check your request body"})
    }
    
})
module.exports = ordersRouter