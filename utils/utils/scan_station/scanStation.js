/* eslint-disable no-console */



function scanStation(id, pool){
    const QUERY = `select 'hoursSinceEpoch_of_db_insertion' from GeneralTable where stationID=${id} ORDER BY id DESC limit 1`;

    pool.query(QUERY, (queryError, result, fields) => {
        if(queryError){
            console.log(queryError);
        } else {
            console.log(result.hoursSinceEpoch_of_db_insertion);
        }
    });
}

module.exports = scanStation;