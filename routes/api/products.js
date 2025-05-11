const Product=require('../../db').Product;
const route=require('express').Router();

route.get('/',(req,res)=>{
      //we want to send array of all products from our database here
      Product.findAll()
      .then((products)=>{
        res.status(200).send(products)
      }).catch((err)=>{
        res.status(500).send({
            error:"Error in fetching products from database"
        })
      })
})

route.post('/',(req,res)=>{
    //we expect the user to send name,manufacturer and price
    //we will create a new product in the database

    //validate the price before creating the product
    if(isNaN(req.body.price)){
        return res.status(400).send({
            error:"Price should be a number"
        })
    }
    
    Product.create({
        name:req.body.name,

        manufacturer:req.body. manufacturer,

        price:parseFloat(req.body.price)
    }).then((products)=>{

        res.status(201).send(products)
    }).catch((err)=>{
        res.status(501).send({
            error:"Error in creating product in database"
        })
    })
})

exports = module.exports = route