import mongoose from 'mongoose';

async function database(req, res, next) {
  console.log(process.env.MONGO_URL);
  await mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
  return next();
}

export default database;
