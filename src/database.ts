//"database" to hold the initial state of data until we learn tomorrow how to connect a real database
import { User } from './models/user'
import { Role } from './models/role'
import { Reimbursement } from './models/reimbursement'
import { ReimbursementType } from './models/reimbursement-type'
import { ReimbursementStatus } from './models/reimbursement-status'

export let roles = [
    new Role(1, "trainee"),
    new Role(2, "employee"),
    new Role(3, "admin")
]

export let users = [
    new User(1, "mbeeman", "password", "matthew", "beeman", "msbeeman@vcu.edu", roles[0])
]

export let ReimbursementStatusData = [
    new ReimbursementStatus(0010, "Approved")
]

export let reimbursements = [
    new Reimbursement(0001, 0, 123.17, 11202019, 11212019, "hotel and some room service", 2, )
]