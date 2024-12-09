import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // Ensure environment variables are loaded

const dbUri = process.env.MONGODB_URI || 'mongodb+srv://jegan:<jegan>@cluster0.icmor.mongodb.net/mydatabase';

const connectDB = async () => {
  try {
    // Check if we already have a connection
    if (mongoose.connection.readyState >= 1) {
      console.log('Already connected to MongoDB');
      return;
    }
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit on failure
  }
};

export default connectDB;
