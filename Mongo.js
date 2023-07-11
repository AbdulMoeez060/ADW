const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the server
client.connect(function(err) {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }

  console.log('Connected successfully to MongoDB');

  // Access the database
  const db = client.db(dbName);

  // Perform database operations
  // ...

  // Close the connection
  client.close();
});
