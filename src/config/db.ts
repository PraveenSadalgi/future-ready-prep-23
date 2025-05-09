
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    // Replace with your MongoDB connection string
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/myappdb');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('Unknown error occurred during database connection');
    }
    process.exit(1);
  }
};

export default connectDB;
