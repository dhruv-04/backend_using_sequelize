const express = require('express');
const cors = require('cors');
require('dotenv').config();

//creating express app
const app = express();


//middlewares
app.use(express.json());
app.use(cors());

//routes
const adminRoutes = require('./routes/adminRoutes');
const guestRoutes = require('./guest/guestRoutes');
app.route('/admin', adminRoutes);
app.route('/guest', guestRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})