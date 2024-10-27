const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BzUl1ZQI#p-v5GZskogzsRnLEa9Q2toXZTW1NiHHFF4GBVPGkFxI",
MONGODB: process.env.MONGODB || "mongodb+srv://nethminabhashitha2009:p9nUB7v8jqlQpxsu@cluster0.dyxda.mongodb.net/",
};
