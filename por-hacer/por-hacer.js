const fs = require('fs');

let listadoPorHacer = [];
const guardaDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}
const cargaDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }

    console.log(listadoPorHacer);
}

const crear = (descripcion) => {

    cargaDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardaDB();

    return porHacer;

}

const getListado = () => {

    cargaDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargaDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargaDB();

    let nuevolistado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })

    if (listadoPorHacer.length === nuevolistado.length) {
        return false;
    } else {
        listadoPorHacer = nuevolistado;
        guardaDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}