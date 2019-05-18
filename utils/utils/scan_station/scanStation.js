/* eslint-disable no-console */



function scanStation(id, pool){
    const QUERY = `select 'hoursSinceEpoch of db_insertion' from GeneralTable where stationID=${id} ORDER BY id DESC limit 1`;

    pool.query(QUERY, (queryError, result, fields) => {
        if(queryError){
            console.log(queryError);
        } else {
            console.log(result[0]);
        }
    });
}

module.exports = scanStation;