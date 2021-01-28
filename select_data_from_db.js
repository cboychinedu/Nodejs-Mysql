/* This script was writing to select data from a database */
// Importing the sql module
const mysql = require('mysql');

// Creating the connection
let conn = mysql.createConnection({
    host: '192.168.122.210',
    user: 'blackbox-server',
    password: '',
    database: 'customers',
    insecureAuth: true
});

// Connecting to the database
conn.connect(function (err)
{
    // Code execution for error in connection
    if (err)
    {
        // Execute this code if there is an error in the connection
        console.log(err.sqlmessage);
    }

    // Code execution for a successful connection
    else
    {
        // Execute this code if the connection is successful
        console.log("Connected!");

        // Creating a variable to hold the sql queries
        let user_db = "USE customers";
        let sql = "SELECT * FROM users";

        // Sending the MySQL queries to the database to extract data from the table "users"
        conn.query(sql, function(err, result, fields)
        {
            // Checking for errors
            if (err)
            {
                // Code execution for error in connection
                console.log(err);
            }

            // Successful connection
            else
            {
                // Code execution for successful connection
                console.log(`The fist name is: ${result[1].FirstName}`);
                console.log(`The last name is: ${result[1].LastName}`);
                console.log(`The age is: ${result[1].Age}`);
                console.log(`The address is: ${result[1].Address}`);

            }

        });

    }
});
