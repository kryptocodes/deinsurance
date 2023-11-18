// /lib/dbConnect.js
import mongoose from 'mongoose'

/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/


const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

interface CachedConnection {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Mongoose> | null;
}

let cached: CachedConnection = {
    conn: null,
    promise: null,
};

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

if (!cached) {
    cached = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MONGODB_URI!, opts).then(mongoose => {
            return mongoose
        })
    }
    //@ts-ignore
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect