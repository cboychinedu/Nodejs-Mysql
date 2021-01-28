/* This script was written to select muiltiple data from a list of wildcars */
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

// Connection to the database
conn.connect(function (err)
{
    // Code exection for error in connection
    if (err)
    {
        // Execute the code if there is an error in the connection
        console.log(err.sqlmessage);
    }

    // Code execution for a successful connection
    else
    {
        // Execute this code if the connection is successful
        console.log("Connected!");

        // Creating a variable to holde the sql queries
        let first_name = "Alan";
        let sql = "SELECT * FROM users WHERE FirstName = ?";

        // Sending the MySQL queries to the database
        conn.query(sql, [first_name], function(err, result)
        {
            // Checking for errors
            if (err)
            {
                // Code execution for errors in connection
                console.log(err);
            }

            // Successful Connection
            else
            {
                // Code exection for a successful connection
                console.log(result);
            }

            // Exiting the code
            process.exit();
        });
    }
});
