const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

async function dbConnect() {
  try {
    const mydb = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    console.log('Transaction db is connected')
  }
  catch (e) {
    console.log(e)

  }
}
module.exports = dbConnect