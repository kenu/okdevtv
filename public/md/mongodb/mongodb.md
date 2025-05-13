# MongoDB
- https://www.mongodb.com/
- Document-oriented NoSQL database
- BSON data format (binary JSON)
- Current version: MongoDB 7.0 (as of 2024)
- Flexible schema with dynamic document model

## Key Features
- Document-oriented storage
- High performance and scalability
- Rich query language
- Aggregation framework
- Full-text search capabilities
- Geospatial indexing
- Time series collections
- Atlas Search (for cloud deployments)
- Transactions support (ACID)
- Change streams for real-time data changes

## Installation

### Local Installation
```bash
# MacOS
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB service
brew services start mongodb-community

# Ubuntu
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

### Docker
```bash
# Pull MongoDB image
docker pull mongodb/mongodb-community-server:7.0

# Run MongoDB container
docker run --name mongodb -d -p 27017:27017 mongodb/mongodb-community-server:7.0
```

### MongoDB Atlas (Cloud)
- Create a free tier cluster at https://www.mongodb.com/cloud/atlas
- Fully managed database service with automated backups, scaling, and security

## Basic Operations

### Connect to MongoDB Shell
```bash
# Local MongoDB
mongosh

# Atlas connection string
mongosh "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/"
```

### CRUD Operations

```javascript
// Create a database
use mydatabase

// Create a collection with documents
db.customers.insertOne({
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  },
  tags: ["premium", "loyal"]
})

// Find documents
db.customers.find({ age: { $gt: 25 } })

// Update a document
db.customers.updateOne(
  { name: "John Doe" },
  { $set: { age: 31, "address.city": "New City" } }
)

// Delete a document
db.customers.deleteOne({ name: "John Doe" })
```

### Aggregation Framework
```javascript
// Group and count documents by city
db.customers.aggregate([
  { $group: { _id: "$address.city", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])

// Complex data pipeline
db.orders.aggregate([
  { $match: { status: "complete" } },
  { $lookup: {
    from: "customers",
    localField: "customer_id",
    foreignField: "_id",
    as: "customer_info"
  }},
  { $unwind: "$customer_info" },
  { $group: {
    _id: "$customer_info.city",
    totalOrders: { $sum: 1 },
    averageAmount: { $avg: "$amount" }
  }}
])
```

## Best Practices

### Schema Design
- Embed related data in a single document when possible
- Use references for large nested documents or frequently changing data
- Optimize for your query patterns
- Consider data growth and document size limits (16MB)

### Indexing
```javascript
// Create indexes for frequently queried fields
db.customers.createIndex({ email: 1 }, { unique: true })

// Compound indexes
db.products.createIndex({ category: 1, price: -1 })

// Text index for full-text search
db.articles.createIndex({ content: "text", title: "text" })
```

### Performance
- Use projection to limit fields returned
- Use `explain()` to analyze query performance
- Consider covered queries (queries that can be satisfied entirely by an index)
- Leverage read/write concerns appropriately

### Security
- Enable authentication and authorization
- Use roles for access control
- Encrypt data at rest and in transit
- Implement field-level encryption for sensitive data

## Advanced Topics

### Replication
- High availability with replica sets
- Automatic failover
- Read scaling with secondary nodes

### Sharding
- Horizontal scaling across multiple servers
- Auto-balancing of data
- Different sharding strategies (range, hash, zoned)

### MongoDB Atlas Features
- Global clusters with multi-region deployment
- Auto-scaling
- Full-text search
- Data visualization with Charts
- Continuous backups
- Online archive for cold data

### Time Series Collections
- Optimized for time series data
- Automatic data expiration
- Built-in optimizations for temporal queries

## MongoDB with Node.js

```javascript
// Using MongoDB Node.js driver
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    
    // Query for a movie
    const query = { title: "The Room" };
    const movie = await movies.findOne(query);
    
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```

### Mongoose ODM
```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { 
  name: String, 
  age: Number,
  tags: [String] 
});

const kitty = new Cat({ name: 'Zildjian', age: 3, tags: ['cute', 'fluffy'] });
kitty.save().then(() => console.log('meow'));
```

## Recent MongoDB Features (7.0)
- Queryable encryption
- Improved aggregation framework performance
- Time series collection enhancements
- Serverless instances in Atlas
- Enhanced change streams
- Vector search capabilities
- Distributed ACID transactions improvements

## Tools & Ecosystem
- MongoDB Compass (GUI)
- MongoDB Atlas (Cloud DBaaS)
- MongoDB Realm (Mobile and Edge database)
- MongoDB Charts (Visualization)
- MongoDB BI Connector
- Aggregation Pipeline Builder
- MongoDB Kubernetes Operator

## ref
- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/) - Free courses
- [MongoDB Developer Center](https://www.mongodb.com/developer/)
- [MongoDB GitHub](https://github.com/mongodb/mongo)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [MongoDB Node.js Driver](https://docs.mongodb.com/drivers/node/)
- [Mongoose Documentation](https://mongoosejs.com/)
