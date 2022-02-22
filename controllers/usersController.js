'use strict'

require('dotenv').config();
var {Pool} = require('pg')

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT,
})


var userController = {
    /* TEST METHOD */
    getUsers: async (req,res) => {
        const resultSet = await pool.query('SELECT * FROM Users;')
        res.send(resultSet.rows)
    },
    createUser: async (req,res) => {
        const {name,email} = req.body;
        const response = await pool.query('INSERT INTO Users(Name,Email) VALUES ($1,$2)',[name,email])
        res.send({msg:"User created."})
    },
    getUserById: async (req,res) => {
        const resultSet = await pool.query('SELECT * FROM Users WHERE Id = $1',[req.params.id])
        res.send(resultSet.rows)
    },
    deleteUser: async (req,res) => {
        const response = await pool.query('DELETE FROM Users WHERE Id = $1',[req.params.id])
        res.send({msg:"User deleted."})
    },
    updateUser: async (req,res) => {
        const {name,email} = req.body;
        const response = await pool.query('UPDATE Users SET Name = $1, Email = $2 WHERE Id = $3',[name,email,req.params.id])
        res.send({msg:"User updated."})
    },
}

module.exports = userController