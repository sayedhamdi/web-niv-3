
import dotenv from 'dotenv'

let parsed = dotenv.config().parsed
const config = {
    mongoUrl : parsed.MONGO_URL,
    port : parsed.PORT,
    sendGridApiKey : parsed.SENDGRID_API_KEY,
    appSecret : parsed.APP_SECRET
}

export default config;