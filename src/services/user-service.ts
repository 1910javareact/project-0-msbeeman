//File Purpose: Do internal processes on a request aka "Business Logic"; Both before and after getting data from database
import { User } from '../models/user';
import {daoGetUserByUsernameAndPassword} from '../repositories/user-dao';


export function getUserByUsernameAndPassword(username: string, password: string): Promise<User> {
  
    return daoGetUserByUsernameAndPassword(username, password);
}