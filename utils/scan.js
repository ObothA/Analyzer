/** purpose
 * to scan stations for on or off status
 */

const mysql = require('mysql');

/* db init connetions pool */
//increase connections
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'jmuhumuza',
    password: 'joshua',
    database: 'wdrDb',
  });


function scan(){
    const QUERY = `select station_id where station_id > 40`;

    pool.query(QUERY, (queryError, result, fields) => {
        if(queryError){
            console.log(queryError);
        } else {
            console.log(results);
        }
    });
}

module.exports = scan;