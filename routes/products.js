
// import library
let express = require('express');
let router = express.Router();
let db = require('mysql2');
let bodyParser = require('body-parser');

// import file model
let Products = require('../models/Products')

router.use(bodyParser.json());

// menampilkan semua data
router.get('/', async function (req, res, next) {
    await Products.findAll().then((value) => {
        if (value.length > 0) {
            res.send(JSON.stringify({
                "status": 200,
                "response": value
            }))
        } else {
            res.send(JSON.stringify({
                "status": 204,
                "response": "no data!"
            }))
        }
    });
});

// menampilkan data berdasarkan id
router.get('/:id', async function (req, res, next) {
    await Products.findAll({
        where: {
            id_product: req.params.id
        }
    }).then((value) => {
        if (value.length > 0) {
            res.send(JSON.stringify({
                "status": 200,
                "response": value
            }))
        } else {
            res.send(JSON.stringify({
                "status": 204,
                "response": "not found!"
            }))
        }
    });
});

// insert data
router.post('/', async function (req, res, next) {
    const data = { 'nama': req.body.nama, 'harga': req.body.harga, 'stok': req.body.stok };

    try {
        await Products.create(data).then((products) => {
            res.send(JSON.stringify({
                status: 200,
                response: products 
            }));
        })
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
});

// update data
router.patch('/:id', async function (req, res, next) {
    const data = { 'nama': req.body.nama, 'harga': req.body.harga, 'stok': req.body.stok };
    try {
        await Products.update(data, {
            where: {id_product: req.params.id}
        }).then((number) => {
            res.send(JSON.stringify({
                status: 200,
                response: "update success, affected row=" + number 
            }));
        })
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
});

// hapus data
router.delete('/:id', async function (req, res, next) {
    try {
        await Products.destroy({
            where: {id_product: req.params.id}
        }).then((number) => {
            res.send(JSON.stringify({
                status: 200,
                response: "delete success, affected row=" + number 
            }));
        })
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
});

module.exports = router;