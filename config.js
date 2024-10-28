const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "8ApxDJJS#kDEBk5_-iVErUBa0IpofEpR6p2X2kZnhQPKmbs7gEws",
MONGODB: process.env.MONGODB || "",
};
