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
        // Displaying the error message for error in connection
        console.log(err);
    }

    // If there is a connection to the database, then execute the code below
    else
    {
        // Displaying the connection message if there is a connection to the database
        console.log("Connected.");

        // Sending MySQL queries to the database to create a database called customers
        conn.query("CREATE DATABASE customers", function(err, result)
      {
          // Checking if there is an error in querying the database
          if (err)
          {
              // Displaying the error message
              console.log(err);
          }

          // if the sql queries was executed, execute this statement
          else
          {
              // Displaying the message for a sucessful connection
              console.log("Database created");
          }
      });

    }
});
