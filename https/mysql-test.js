import mysql from "mysql2";
const connectionDb = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "shalupenb",
  password: "Gi4akc2004",
  database: "fdb",
});
connectionDb.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    connectionDb.query(
      `update books
       set title = "test-update",
           author = "test-author"
       where title = "test title";`, 
      (err, res ) => {
        if(err) {
          console.log(err);
        } else {
          console.log(res);
        }
      }
    );
    connectionDb.query(
      `delete from books where title = "test-update";`, 
      (err, res ) => {
        if(err) {
          console.log(err);
        } else {
          console.log(res);
        }
      }
    );
  }
});