const { callKraken } = require('./kraken')


function getTradesHistory () {

    function tradeTransform (obj) {
        const returnArr = Object.keys(obj).map((id) => {
            return {
                id
                // pair: obj[id].descr.pair,
                // time: obj[id].time,
                // type: obj[id].descr.type,
                // ordertype: obj[id].descr.ordertype,
                // price: obj[id].price,
                // fee: obj[id].fee,
                // vol: obj[id].vol   
            }
        })
        return returnArr
    }
    
    return callKraken('TradesHistory')
        .then(res => {
            return tradeTransform(res.result.trades)  
        })
        .catch(e => {
            console.log(e)
    })
}


module.exports = {
    getTradesHistory
}