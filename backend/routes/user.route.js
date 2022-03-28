const express = require('express')
const route = express.Router()
const User = require('../model/user.model')

route.get('/', async (req,res) => {
    const users = await User.find()
    res.json(users)
})
route.put('/signup', (req, res) => {
    User.findById(req.body.id)
    .then(user => {
        user.id = req.body.id;
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.confirmpwd = req.body.confirmpwd;
        user.isAdmin = req.body.isAdmin;

        user.save()
        .then(() => res.json("Exercise Updated !"))
        .catch(err => res.status(400).json('Error' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

route.get('/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(err){
        res.send({"Error": err})
    }
})

route.post('/signup', async(req, res) => {
   const user = new User({
       id: req.body.id,
       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
       confirmpwd: req.body.confirmpwd,
       isAdmin: req.body.isAdmin
   })
   try{
       const u1 = await user.save()
       res.json(u1)
   }catch (err) {
       res.send ({'Error':err})
   }
})

route.delete('/:id', (req, res) => {
    try{
        const user = User.findById(req.params.id)
        const u1 = user.remove()
        res.json(u1)
    }catch (err) {
        res.send('Error')
    }
})

module.exports = route;