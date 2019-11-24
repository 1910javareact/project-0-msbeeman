//Contain functions for interacting with the database
import { User } from '../models/user'
import { users } from '../database'


export async function daoGetUserByUsernameAndPassword(username: string, password: string): Promise<Garden> {
    let client: PoolClient;

    try {
        client = await connectionPool.connect();
        //we use $number to represent a paramter to our sql query
        //then we provide those paramaters as values in an array
        //that array is the second param of the query function
        //this way, pg can sanitize the user inputs, so we can avoid sql injection
        //we call this kind of query a paramaterized query // sometimes a prepared statement
        const result = await client.query('SELECT * FROM garden_book.garden natural join garden_book.garden_roles natural join garden_book.roles WHERE username = $1 and password = $2',
            [username, password]);
        if (result.rowCount === 0) {
            throw 'bad credentials';
        } else {
            return gardenDTOtoGarden(result.rows);
        }
    } catch (e) {
        console.log(e);
        if (e === 'bad credentials') {
            throw {
                status: 401,
                message: 'Bad credentials'
            };
        } else {
            throw {
                status: 500,
                message: 'Internal Server Error'
            };
        }
    } finally {
        client && client.release();
    }
}


export function daoGetAllUsers():User[]{
    return users
}
