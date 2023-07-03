import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {
    if (connection.isConnected) {
        return
    }
    const db = await mongoose.connect(process.env.DB_EXT_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    connection.isConnected = !!db.connections[0].readyState
}

export default dbConnect 