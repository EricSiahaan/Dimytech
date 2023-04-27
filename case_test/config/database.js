const mysql = require('mysql');

const connectDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '17081945',
    database: 'db_ecommerce',
    multipleStatements: true,
});

connectDB.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected ...')
});

process.on('SIGTERM', () => {
    connectDB.destroy()
})

module.exports = connectDB