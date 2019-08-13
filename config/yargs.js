const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    desc: 'Marca como completado o pendiente la tarea',
    default: true,
    alias: 'c'
};

const argv = require('yargs')
    //.command('listar', 'Imprime en cosola la tabla de multiplicar', opt)
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemento de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}