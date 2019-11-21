import express from 'express'
import bodyparser from 'body-parser'
import { loggingMiddleware } from './middleware/logging-middleware'
import { sessionMiddleware } from './middleware/session-middleware'

const app = express() //Creates an instance of express

app.use(bodyparser.json()) //Turns JSON string into a JS Object

app.use(loggingMiddleware) //Middleware for logging

app.use(sessionMiddleware) //Adds a session object to every req object. Access using req.session

//Available Endpoints
app.use('/login') //Login
app.use('/users') //Find Users, Update User, Update Reimbursement
app.use('/users/:id') //Find Users By ID
app.use('/reimbursements/status/:statusId') //Find Reimbursement by Status
app.use('/reimbursements/author/userId/:userId') //Find reimbursements by user
app.use('/reimbursements') //submit reimbursement


const PORT = 1001
app.listen(PORT || 1001, () => console.log(`The server has started on port: ${PORT}`));
