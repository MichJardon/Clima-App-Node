const lugar = require('./Lugar/Lugar.js');
const clima = require('./Clima/Clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        description: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLong(argv.direccion)
//     .then(console.log);

// clima.getClima(35, 139)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLong(direccion);

        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}`;

    } catch (error) {
        return `No se puedo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);