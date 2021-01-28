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
        // Execute this code if the connection was successful
        console.log("Connected!");

        // Creating a variable to hold the sql queries
        let user_db = "USE customers";
        let sql = "CREATE TABLE users (FirstName VARCHAR(255), LastName VARCHAR(255), Age VARCHAR(255), Address VARCHAR(255))";

        // Sending MySQL queries to the database to create a table called users
        conn.query(user_db, function(err, result)
        {
            //
            console.log(err);
        });

        // Sending MySQL queries to the database to create a table called users
        conn.query(sql, function(err, result)
      {
          // Checking if there is an error in creation of the table
          if (err)
          {
              // Displaying the error message
              console.log(err);
          }

          // if the sql queries was executed, execute this statment
          else
          {
              // Displaying the message for a successful connection
              console.log("Table created");
          }
      });
    }
});
