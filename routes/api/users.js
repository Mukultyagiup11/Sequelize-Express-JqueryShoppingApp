const User=require('../../db').User;

const route=require('express').Router();

route.get('/',(req,res)=>{
    //we want to send array of all users from our database here
      User.findAll()
      .then((users)=>{
          res.status(200).send(users)
      })
      .catch((err)=>{
        res.status(500).send({
            error:"Error in fetching users from database"
        })
      })
})

route.post('/',(req,res)=>{
   //we expect the user to send name
   //we will create a new user in the database
   User.create({
    name:req.body.name
   }).then((user)=>{
    res.status(201).send(user)
   }).catch((err)=>{
      res.status(501).send({
        error:"Error in creating user in database"
      })
   })
})

exports=module.exports=route
