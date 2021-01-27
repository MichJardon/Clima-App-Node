const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c0f6e069f870d69fef88f5639d8f669a`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}