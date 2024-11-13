const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api', todoRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
