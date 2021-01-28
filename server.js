// Importing the sql module
const mysql = require('mysql');

// Creating a connection
let conn = mysql.createConnection ({
    host: "192.168.122.210",
    user: "blackbox-server",
    password: "",
    insecureAuth: true
});

// Connecting to the database
conn.connect(function (err)
{
    // Code exection for the connect function
    if (err)
    {
        //
        console.log(err);
    }

    else {
      //
      console.log("Connected to the server on '192.168.122.210'");

    }

});
