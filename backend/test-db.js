// Simple script to test MongoDB connection
require('dotenv').config();
const mongoose = require('mongoose');

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/interior-design';

mongoose
  .connect(mongoUri, {
    dbName: 'interior-design',
  })
  .then(async () => {
    console.log('✓ MongoDB connected successfully!');
    console.log('Database:', mongoose.connection.db.databaseName);
    
    // List collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('\nCollections:', collections.length > 0 ? collections.map(c => `  - ${c.name}`).join('\n') : '  (none - database is empty, which is normal)');
    
    console.log('\n✓ Everything looks good!');
    console.log('To see data, register a user through the website.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('✗ MongoDB connection error:', err.message);
    console.log('\nMake sure:');
    console.log('1. MongoDB is running');
    console.log('2. Connection string is correct');
    process.exit(1);
  });
