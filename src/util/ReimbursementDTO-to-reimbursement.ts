import { ReimbursementDTO  } from '../dtos/reimbursement-dto';
import { Reimbursement } from '../models/reimbursement';

//Function will take in an array of ReimbursementDTOs and loop through it, then build a new reimbursement object
//and pass in all values (including the role array that was built)
export function reimbursementDTOtoReimbursement(rD: ReimbursementDTO[]): Reimbursement {
    const roles = [];
    for (const r of rD) {
        roles.push({
            typeId: r.type_id,
            type: r.type});
    }
    return new Reimbursement(
        rD[0].reimbursementId,
        rD[0].author,
        rD[0].amount,
        rD[0].dateSubmitted,
        rD[0].dateResolved,
        rD[0].description,
        rD[0].resolver,
        rD[0].status,
        roles);
}