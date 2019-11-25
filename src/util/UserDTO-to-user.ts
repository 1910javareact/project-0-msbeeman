import { UserDTO } from '../dtos/user-dto';
import { User } from '../models/user';


//Function will take in an array of userDTOs, loop through it and grab all roles names, then build a new user object
//and pass in all values (including the role array that was built)
export function userDTOtoUser(uD: UserDTO[]): User {
    const roles = [];
    for (const u of uD) {
        roles.push({
            roleId: u.role_id,
            role: u.role_name});
    }
    return new User(
        uD[0].user_id, 
        uD[0].username, 
        uD[0].password,
        uD[0].firstName,
        uD[0].lastName,
        uD[0].email,
        roles);
}

//this function takes in many garden dtos, some with the same id
//it adds all garden dtos with the same id to a temp array
//then converts that array into a single garden object from 1-3 gardenDTO objects
//this function can be used with any set of gardenDTOS to turn them into Gardens
export function multiUserDTOConvertor(uD: UserDTO[]): User[] {
    let currentUser: UserDTO[] = [];
    const result: User[] = [];
    for (const u of uD) {
        if (currentUser.length === 0) {
            currentUser.push(u);
        } else if (currentUser[0].user_id === u.user_id) {
            currentUser.push(u);
        } else {
            result.push(userDTOtoUser(currentUser));
            currentUser = [];
            currentUser.push(u);
        }
    }
    result.push(userDTOtoUser(currentUser));
    return result;
}