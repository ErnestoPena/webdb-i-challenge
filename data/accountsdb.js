const knex = require('knex');
const dbconnection = require('./dbConfig');

module.exports = {
    get,
    getById,
    insert,
    remove,
    update,
}

function get() {
    return db('accounts')
}

function getById(id) {

}

function insert() {

}

function remove() {

}

function update(id , newdata) {
    
}