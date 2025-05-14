const express = require('express');
const cors = require('cors');
const environment = require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the sever!');
});

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@usercluster.ol4exsn.mongodb.net/?retryWrites=true&w=majority&appName=userCluster`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const database = client.db('coffeeDB');
    const coffeeCollection = database.collection('coffee');
// add coffee
    app.post('/coffee', async (req, res) => {
      const coffee = req.body;
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result);
    });
// Delete coffee
    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });
//Details coffee
    app.get('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    });
// Update coffee
    app.put("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
       const options = { upsert: false }; 
      const updateDoc = {
        $set: {
          name: req.body.name,
          quantity: req.body.quantity,
          price: req.body.price,
          test: req.body.test,
          category: req.body.category,
          details: req.body.details,
          photo: req.body.photo
        }
      }
      const result = await coffeeCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });
// get all coffee
    app.get('/coffee' , async (req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

  } finally {
    
    // await client.close();
  }
};
run().catch(console.dir);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});