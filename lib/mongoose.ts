import mongoose from 'mongoose';

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    console.log('MONGODB_URI is not defined');
    return;
  }

  if (isConnected) {
    console.log('=> using existing database connection');
    return;
  }

  console.log('Attempting to connect to MongoDB with URI:', uri);

  try {
    await mongoose.connect(uri);

    isConnected = true;
    console.log('MongoDB Connected');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
}