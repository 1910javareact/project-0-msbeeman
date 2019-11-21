//"database" to hold the initial state of data until we learn tomorrow how to connect a real database
import { User } from './models/user'
import { Role } from './models/role'
import { Reimbursement } from './models/reimbursement'
import { ReimbursementType } from './models/reimbursement-type'
import { ReimbursementStatus } from './models/reimbursement-status'

export let roles = [
    new Role(1, "trainee"),
    new Role(2, "employee"),
    new Role(3, "QC"),
    new Role(4, "admin")
]

export let users = [
    new User(101, "mbeeman", "password", "matthew", "beeman", "msbeeman@vcu.edu", roles[0]),
    new User(102, "jsmith", "password", "john", "smith", "jsmith@gmail.com", roles[1]),
    new User(103, "andrewqc", "password", "andrew", "qc", "cantWaitToRoastSomeTrainees@gmail.com", roles[2]),
    new User(104, "imACeo", "password", "dontForget", "imACEO", "imACEO@gmail.com", roles[3])
]

export let reimbursementStatusData = [
    new ReimbursementStatus(1, "Pending"),
    new ReimbursementStatus(2, "Approved"),
    new ReimbursementStatus(3, "Denied")
]

export let reimbursementTypeData = [
    new ReimbursementType(1, "Lodging"),
    new ReimbursementType(2, "Travel"),
    new ReimbursementType(3, "Food"),
    new ReimbursementType(4, "Other")
]

export let reimbursements = [
    new Reimbursement(1001, 0, 123.17, 11202019, 11212019, "hotel and some room service", 4, 2, 1),
    new Reimbursement(1002, 0, 23.19, 11182019, 11212019, "munchieZ", 4, 1, 3),
    new Reimbursement(1003, 0, 516.89, 11132019, 11212019, "flight to denver", 4, 3, 2)
]
