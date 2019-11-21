//Contain functions for interacting with the database
import { User } from '../models/user'
import { users } from '../database'

export function daoGetAllUsers():User[]{
    return users
}