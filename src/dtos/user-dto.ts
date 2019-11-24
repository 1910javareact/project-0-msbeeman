//User DTO is going to be the database version of one of the user model

//this dto is going to be after the natural joins to get the roles
export class UserDTO {
    garden_id: number;
    username: string;
    password: string;
    prettiness: number;
    name: string;
    role_id: number;
    role_name: string;
}