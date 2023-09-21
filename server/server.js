import express from 'express'

//Import the router from routes/gifts.js
import giftsRouter from './routes/gifts.js'

//initionalize express
const app = express()

//app.use is a method in express to add middleware to the application
//express.static is a built in middleware function to serve static files
//middleware function to serve static files from the public directory to serve the files from the client\public directory
app.use('/public', express.static('./public'));
//middleware function to serve static files from the scripts directory to serve the files from the client\public\scripts directory, 
app.use('/scripts', express.static('./public/scripts'))

//Add the /gifts endpoint to the app by adding the following code after the middleware configuration.
app.use('/gifts', giftsRouter)


//Define a route for the root URL of the server with parameters req and res. This will help us quickly see that our server is working and responding correctly when we start it.
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

//Start a server on port process.env.PORT or 3001
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})