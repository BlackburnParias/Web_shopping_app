import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.get('/api/products', (req, res) => {
    res.send(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.send(product)
})

const PORT = process.env.PORT || 4000

app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.
        yellow.bold)
)

