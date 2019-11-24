import { User } from '../models/user'


export function getUserByUsernameAndPassword(username: string, password: string): Promise<User> {
  
    return daoGetUserByUsernameAndPassword(username, password);
}