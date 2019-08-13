//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');

//console.log(argv);

let comando = argv._[0];

//console.log(argv.descripcion);
//console.log(argv.completado);
//console.log(argv);


switch (comando) {

    case 'crear':
        console.log('crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('=====Por Hacer=========='.blue);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=====Por Hacer=========='.blue);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('commando no reconocido');
}