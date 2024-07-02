import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://koustubhlap:kond018@koustubh18.qmw1c9a.mongodb.net/UserAuthDB';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection failed:', (error as Error).message);
    process.exit(1);
  }
};

export default connectDB;