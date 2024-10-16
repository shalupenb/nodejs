import mysql from "mysql2";
export const connectionDb = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "shalupenb",
    password: "Gi4akc2004",
    database: "fdb",
});
