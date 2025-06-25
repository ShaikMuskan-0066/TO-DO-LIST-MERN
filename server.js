const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Replace <db_password> with your actual MongoDB password
const MONGO_URI = 'mongodb+srv://shaikmuskan:muskan00123@muskan.hu4rxet.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Muskan';

// MongoDB connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/api/todos', todoRoutes);

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
