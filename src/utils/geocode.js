const request = require('request');

const geoCode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoicmF6YWFrbWFsMjI5OCIsImEiOiJjazBrMmN1cmcwaDRkM2JvMzd2dWVwM2dqIn0.Afd-IlgT2V-JlByG-CEKFA';

	request({ url: url, json: true}, (error, {body}) => {
		if (error) {
			callback('Unable to connect to Location service', undefined);
		} else if(body.features.length ===  0) {
			callback('Unable to find location', undefined);
		} else {
			callback(undefined, {
				Lattitude: body.features[0].center[0],
				Longitude: body.features[0].center[1],
				Location: body.features[0].place_name			
			})
		}
	})	
} 

module.exports = geoCode;