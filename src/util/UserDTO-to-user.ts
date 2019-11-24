import { UserDTO } from '../dtos/user-dto';
import { User } from '../models/user';


//this function will take in an array of gardenDTOs
//First we will loop through the array and grab all role names
//then we build a new garden object and pass in all values
//including the role array we built
export function userDTOtoUser(uD: UserDTO[]): User {
    const roles = [];
    for (const g of uD) {
        roles.push(g.role_name);
    }
    return new User(
        gD[0].name,
        gD[0].prettiness,
        gD[0].garden_id,
        gD[0].username,
        gD[0].password,
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
