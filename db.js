const Sequelize=require('sequelize');

const db=new Sequelize('shopdb','shopper','shoppass',{
      host:'Localhost',
      dialect:'mysql',
      pool:{
        min:0,
        max:2
      }
})

const User=db.define('users',{
   id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
   },
   name:{
    type:Sequelize.STRING(20),
    allowNull:false
   }
})

const Product=db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
       },
       name:{
        type:Sequelize.STRING(20),
        allowNull:false
       },
       manufacturer:Sequelize.STRING(20),
      price:{
          type:Sequelize.FLOAT,
          allowNull:false,
          defaultValue:0.0
        }
      })

db.sync()
     .then(()=>{
      console.log("Database synced")
     }).catch((err)=>console.error("Error in syncing database",err))

exports=module.exports={
    User,Product
}