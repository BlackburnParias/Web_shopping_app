import mongoose from "mongoose";
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`MOngoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`error: ${error.message}`.red.underline.bold)
        process.exit()
    }
}

export default connectDB