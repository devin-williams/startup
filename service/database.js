const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.username}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('authDB');
const userCollection = db.collection('users');
const scoreCollection = db.collection('scores');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log("Connected to MongoDB!");
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const userType = email === 'admin' && password === 'admin' ? 'help-rep' : 'user';

  const user = {
    email: email,
    password: passwordHash,
    token: uuidv4(),
    type: userType,
  };
  await userCollection.insertOne(user);

  return user;
}

async function updateUserToken(email, token) {
  return userCollection.updateOne({ email }, { $set: { token } });
}

async function deleteUserToken(token) {
  return userCollection.updateOne({ token }, { $unset: { token: "" } });
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  updateUserToken,
  deleteUserToken,
};