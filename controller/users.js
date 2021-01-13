const usersRouter=require('express').Router();
const { response}= require('express')
const Users = require('../models/users')
const bcrypt= require('bcrypt')




//allows you to signup//
usersRouter.post('/Signup', async (request, response, next) =>{
    const {name,username,dateofbirth,email,mobilenumber}=request.body;
    const password = bcrypt.hashSync(request.body.password, 10)
    console.log(name, username, dateofbirth, email, password)
    if (name, email,dateofbirth, username, mobilenumber && password){
        const usersCount= await Users.countDocuments();

        const newUsers = new Users({
            id: usersCount + 1,
            name: name,
            username:username,
            email:email,
            dateofbirth:dateofbirth,
            passwordHash:password,
            mobilenumber:mobilenumber

        })

        newUsers.save()
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

usersRouter.post('/login', async (request,response, next) => {
    const username = request.body.username
    const password = request.body.password
    if (username && password){
    await Users.findOne({username:username}).exec((error, user)=> {
        if (error) {
            response.status(500).send({error: "INTERNAL SERVER ERROR"})
        }
        try {
            const passwords = bcrypt.compareSync(password, user.passwordHash)
            if (passwords) {
                response.status(200).send({message: "Logged In"})
            } else {
                response.status(405).send({error: "invalid username or password"})
            }
        } catch (exception) {
            console.log(exception)
            response.status(500).send({exception})
        }
    })
  

        }    
    
})
module.exports = usersRouter