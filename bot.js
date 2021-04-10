require('dotenv').config()
const fetch = require('node-fetch')
const ccxt = require('ccxt')
/**
 *  sets up the info for the exchange
 * @type {module:ccxt.bybit}
 */


const bybit = new ccxt.bybit({
    apiKey: process.env.API_Private_Key,
    secret: process.env.Private_Key
})

const tick = async(config, exchange) => {
    const {asset, base, spread, allocation} = config
    const market = `${asset}/${base}`
    const coinGecko = `https://api.coingecko.com/api/v3/simple/price?ids=${asset}&vs_currencies=${base}%20%20`
    const res = await  fetch(coinGecko);



    // const orders = await bybit.fetchOpenOrders(market)
    //
    // orders.forEach( async order => {
    //       await bybit.cancelOrder(order.id)
    // })


}

const run = () => {
    const config = {
        asset: 'BTC',
        base: 'USDT',
        allocation: 0.1,
        spread: 0.2,
        tickInterval: 2000
    }
    tick(config,bybit)
    setInterval(tick, config.tickInterval)
}


