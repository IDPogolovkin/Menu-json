const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')
const bodyParser = require('body-parser')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password2003',
    database: 'MenuDB'
})

db.connect()

app.use(cors())
app.use(express.json({ limit: '32mb' }))
app.use(bodyParser.urlencoded({extended: true, limit: '32mb'}))

app.get("/api/get", (req, res)=> {
    const sqlSelect = 'SELECT * FROM MenuDB.menu'
    db.query(sqlSelect, (error, result)=>{
        res.send(result)
    })
})

app.get("/api/get/desert", (req, res)=> {
    const sqlSelect = 'SELECT * FROM MenuDB.deserts'
    db.query(sqlSelect, (error, result)=>{
        res.send(result)
    })
})

app.get("/api/get/mainDish", (req, res)=> {
    const sqlSelect = "SELECT * FROM MenuDB.mainDish"
    db.query(sqlSelect, (error, result)=>{
        res.send(result)
    })
})

app.get("/api/get/drinks", (req, res)=> {
    const sqlSelect = "SELECT * FROM MenuDB.drinks"
    db.query(sqlSelect, (error, result)=>{
        res.send(result)
    })
})

app.post("/api/insert/desert", (req, res)=>{
    const title = req.body.title
   const description = req.body.description
   const price = req.body.price
   const rating = req.body.rating
   const image = req.body.image
   const sale = req.body.sale
   const products = req.body.products


    const sqlInsert =
    'INSERT INTO MenuDB.deserts (title, description, price, rating, coverImg, sale, products) VALUES (?, ?, ?, ?, ?, ?, ?)'
    db.query(sqlInsert, [title, description, price, rating, image, sale, products], (error, results)=>{
        console.log(error)
    })
})

app.post("/api/insert/mainDish", (req, res)=>{
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const rating = req.body.rating
    const image = req.body.image
    const sale = req.body.sale
    const products = req.body.products
 
 
     const sqlInsert =
     'INSERT INTO MenuDB.mainDish (title, description, price, rating, coverImg, sale, products) VALUES (?, ?, ?, ?, ?, ?, ?)'
     db.query(sqlInsert, [title, description, price, rating, image, sale, products], (error, results)=>{
        console.log(error)
    })
})

app.get("/api/insert/drinks", (req, res)=>{
    const sqlInsert = 
    "INSERT INTO MenuDB.drinks (title, description, price, rating, sale, products) VALUES ('Флэт Уайт', 'Ароматный, насыщенный', 1500, 5.0, true, false);"
    db.query(sqlInsert, (error, results)=>{
        console.log(error)
        res.send('insert successefully')
    })
})

app.post("/api/insert", (req, res)=>{

   const title = req.body.title
   const description = req.body.description
   const price = req.body.price
   const rating = req.body.rating
   const image = req.body.image
   const sale = req.body.sale
   const products = req.body.products


    const sqlInsert =
    'INSERT INTO MenuDB.menu (title, description, price, rating, coverImg, sale, products) VALUES (?, ?, ?, ?, ?, ?, ?)'
    db.query(sqlInsert, [title, description, price, rating, image, sale, products], (error, results)=>{
        console.log(error)
    })
})

app.delete('/api/delete/:title', (req, res)=>{
    const name = req.params.title

    const sqlDelete = 'DELETE FROM MenuDB.menu WHERE title = ?'

    db.query(sqlDelete, name, (error, results) =>{
        if (error) console.log(error)
    })
})

app.delete('/api/delete/desert/:title', (req, res)=>{
    const name = req.params.title

    const sqlDelete = 'DELETE FROM MenuDB.deserts WHERE title = ?'

    db.query(sqlDelete, name, (error, results) =>{
        if (error) console.log(error)
    })
})

app.delete('/api/delete/main_dish/:title', (req, res)=>{
    const name = req.params.title

    const sqlDelete = 'DELETE FROM MenuDB.mainDish WHERE title = ?'

    db.query(sqlDelete, name, (error, results) =>{
        if (error) console.log(error)
    })
})

app.put("/api/update", (req, res)=>{
    const name = req.body.name
    const description = req.body.dishDesc

    const sqlUpdate = 'UPDATE MenuDB.menu SET description = ? WHERE title = ?'
    db.query(sqlUpdate, [description, name], (error, results)=>{
        console.log(error)
    })
})

app.put("/api/desert/update", (req, res)=>{
    const name = req.body.name
    const description = req.body.dishDesc

    const sqlUpdate = 'UPDATE MenuDB.deserts SET description = ? WHERE title = ?'
    db.query(sqlUpdate, [description, name], (error, results)=>{
        console.log(error)
    })
})

app.put("/api/main_dish/update", (req, res)=>{
    const name = req.body.name
    const description = req.body.dishDesc

    const sqlUpdate = 'UPDATE MenuDB.mainDish SET description = ? WHERE title = ?'
    db.query(sqlUpdate, [description, name], (error, results)=>{
        console.log(error)
    })
})

app.listen(3001, ()=>{
    console.log('Server is running!');
});