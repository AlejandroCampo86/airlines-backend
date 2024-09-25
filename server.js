// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Database connection
const dbURI = 'mongodb+srv://alecampo86:OkDW1SqGUI4SShDv@airlinesapp.mjrqm8w.mongodb.net/?retryWrites=true&w=majority&appName=AirlinesApp';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Routes
app.use('/api/crew', require('./routes/crew'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/aircraft', require('./routes/aircraft'));
app.use('/api/passengers', require('./routes/passengers'));
app.use('/api/sales', require('./routes/sales'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
