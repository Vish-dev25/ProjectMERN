const express = require('express');
const route = express.Router();
const Item = require('../model/item.model')

route.get('/', async (req, res) => {
    const items = await Item.find()
    res.json(items);                     //sends json response
})

route.get('/:id', async (req, res) => {
    try {
        const items = await Item.findById(req.params.id)
        res.json(items)
    }catch(err){
        res.send({'Error' : err})
    }
})

route.post('/', async (req, res) => {
    const newItem = new Item({
        id: req.body.id,
        item_name: req.body.item_name,
        item_details: req.body.item_details,
        price: req.body.price,
        category: req.body.category
    })
   
    newItem.save()
    .then((item) => res.send(item) )
    .catch((err) => res.status(400).json("Error" + err));
})

route.put('/update/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            item.id = req.body.id;
            item.item_name = req.body.item_name;
            item.item_details = req.body.item_details;
            item.price = req.body.price;
            item.category = req.body.category;

            item.save()
                .then(() => res.json('Exercise updated !'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

route.delete('/delete/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        const i1 = await item.remove()
        res.json(i1)
    }
    catch (err) {
        {
            res.send('Error')
        }
    }
})


module.exports = route
