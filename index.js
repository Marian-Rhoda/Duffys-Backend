const {request}= require('express');
const express = require('express');
const app =express();
const port= 4030;
const mongoose= require('mongoose');
require('dotenv').config();
const cors =require('cors')
app.use(cors())
const bodyParser= require('body-parser');
const usersRouter= require('./controller/users')
const ordersRouter=require('./controller/orders')

const config= {
    useNewUrlParser: true,
    useUnifiedTopology:true
}
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI,config)
.then(() =>{
    console.log("Successfully connected to MongoBD");
})
.catch(err=> {
    console.error('Some problem occurred', err)
})

app.use(express.json());
app.use('/users',usersRouter)
app.use('/orders',ordersRouter)


app.listen(process.env.PORT, ()=> {
    console.log('Express App is working', process.env.PORT)
});