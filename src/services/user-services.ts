export function getUserByUsernameAndPassword(username: string, password: string): Promise<Garden> {
    //if this was for real
    //we should be hashing and salting the password here
    //but our api is wildly unsecure, so don't worry about
    return daoGetUserByUsernameAndPassword(username, password);
}