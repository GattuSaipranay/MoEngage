const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const breweryRoutes = require('./routes/breweryRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/brewery', breweryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
