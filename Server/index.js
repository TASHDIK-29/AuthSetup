const express = require('express');
const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174']
}
app.use(cors(corsOptions))
app.use(express.json());

const client = require('./connect')

// Sj09OMsQALylEaET
// Tashdik



// const { MongoClient, ServerApiVersion } = require('mongodb');
//  const uri = "mongodb+srv://Tashdik:Sj09OMsQALylEaET@cluster0.iepmiic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         // await client.connect();



//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         // await client.close();
//     }
// }
// run().catch(console.dir);




// Routes
const authRouter = require('./routes/authRoute');


app.use('/auth', authRouter);




app.get('/', (req, res) => {
    res.send('server is on');
})
app.listen(port, () => {
    console.log(`server is on port ${port}`);
})


