const knex = require('knex')({
    dialect: 'mysql',
    connection:{
        host:'140.143.194.238',
        user:'istar',
        password:'iStar12345@',
        database: 'test'
    }
})
const data = knex.select('*').from('users')

console.table(knex)
console.log(data.id)