const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3c9127f9922ab726f15c1742ede5492c/' + latitude + ','+ longitude  + '?units=si'

request({url, json:true}, (error, {body}) => {
//console.log(response.body.currently)

if (error) {
    callback('unable to connect to weather service!', undefined)
} else if (body.error) {
    callback('Unable to find location', undefined)
} 
else {

    callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +
' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
})
}

module.exports = forecast
