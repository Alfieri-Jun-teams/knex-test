import Knex from 'knex'
import {User} from '../src/model/user'

let knex : Knex =  Knex({
    client: 'mysql',
    connection:{
        host:'140.143.194.238',
        user:'istar',
        password:'iStar12345@',
        database: 'test'
    }
})


async function getData(){

   const account:User = await knex.select('*').from('users')
   console.table(account)
}
getData()