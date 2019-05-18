/* eslint-disable no-console */

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
    const QUERY = `select station_id from stations where station_id > 40`;

    pool.query(QUERY, (queryError, result, fields) => {
        if(queryError){
            console.log(queryError);
        } else {
            // console.log(result);
            // console.log();
            // console.log(result[1].station_id);

            result.map((station) => {
                console.log(station.station_id);
            })
        }
    });
}

module.exports = scan;