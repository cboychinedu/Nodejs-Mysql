/* This script is for inserting data into the MySQL database online */
// Importing the sql module
const mysql = require('mysql');

// Creating the connection
let conn = mysql.createConnection({
    host: '192.168.122.210',
    user: 'blackbox-server',
    password: '',
    insecureAuth: true
});

// Connecting to the database
conn.connect(function (err)
{
    // Code execution for error in connection
    if (err)
    {
        // Execute this code if there is an error in connection
        console.log(err.sqlmessage);
    }

    // Code execution for a successful connection
    else
    {
        // Execute this code if the connection is successful
        console.log("Connected!");

        // Creating a variable to hold the sql queries
        let user_db = "USE customers";
        let sql = "INSERT INTO users (FirstName, LastName, Age, Address) VALUES ('Alan', 'Smith', '31', 'USA')";

        // Using the "customers" database
        conn.query(user_db, function(err, result)
        {
            // Displaying the error in connection
            if (err)
            {
                // Code execution for error in connecton
                console.log(err);
            }
        });

        // Sending the MySQL queries to the database to add data to the table "users"
        conn.query(sql, function(err, result)
        {
            // Checking for errors
            if (err)
            {
                // Code execution for error in connection
                console.log(err);
            }

            // successful connection
            else
            {
                // Code execution for successful connection
                console.log("1 record inserted.");
            }
        });
    }
});
