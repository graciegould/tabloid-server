const mongoose = require('mongoose');
const URI = `mongodb+srv://graciegould5:Ym23LTyogpKcB00I@tabloid.98ws06z.mongodb.net/?retryWrites=true&w=majority&appName=tabloid`
module.exports = async function connectDB() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
