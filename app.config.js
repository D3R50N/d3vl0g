require("dotenv").config();

module.exports = {
    port: parseInt(process.env.PORT||5000),
}