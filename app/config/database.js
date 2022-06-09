require("dotenv").config();

const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        // phanvu2k
        await mongoose.connect(`mongodb+srv://phanvu2k:phanvu2k@cluster0.lhrbu.mongodb.net/?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("MongoDB connecting succesfully");

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;