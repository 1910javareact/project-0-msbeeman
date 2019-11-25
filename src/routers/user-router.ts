//Contains user endpoints for Find Users, Update User, Update Reimbursement
import express from 'express';
import { User } from '../models/user';
import * from '../services/user-service'
import { authorization } from '../middleware/auth-middleware';

export const userRouter = express.Router();



 //Find Users By ID
 userRouter('/:id', );