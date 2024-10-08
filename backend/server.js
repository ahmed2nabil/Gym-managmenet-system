const app = require('./app');
const connectDB = require('./db/dbConnection');

const port = process.env.PORT || 4201;

// Connect to MongoDB
connectDB();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});