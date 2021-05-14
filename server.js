const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const connectdb =require('./helper/db')


// Config dotenv file
require('dotenv').config({
    path: './config/config.env'
})


const app = express();

//database
connectdb();

app.use(express.json())





if (process.env.NODE_ENV === 'development') {

    // client frontend
    app.use(cors({
        origin: process.env.CLIENT_URL
     }))

    //middleware
    app.use(morgan('dev'))
}



app.use('/api/post',require('./routes/userpost'))


app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
    console.log(`server started ${PORT}`);
});