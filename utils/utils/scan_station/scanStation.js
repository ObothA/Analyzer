/* eslint-disable no-console */



function scanStation(id, pool){
    const QUERY = `select hoursSinceEpoch_of_db_insertion from GeneralTable where stationID=${id} ORDER BY id DESC limit 1`;

    pool.query(QUERY, (queryError, result, fields) => {
        if(queryError){
            console.log(queryError);
        } else {
            const db_epoch_time = result[0].hoursSinceEpoch_of_db_insertion;
            if(db_epoch_time){
                console.log(db_epoch_time);
            }
        }
    });
}

module.exports = scanStation;