const Knex = require('knex')

const knex = new Knex({
    client: 'mysql',
    connection:{
        host:'140.143.194.238',
        user:'istar',
        password:'iStar12345@',
        database: 'test'
    }
})

async function getData(){
    const data =  await knex.select('*').from('users')
    console.log(data)
}
getData()
