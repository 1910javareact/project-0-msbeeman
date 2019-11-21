import express from 'express'
import bodyparser from 'body-parser'
import { loggingMiddleware } from './middleware/logging-middleware'
import { sessionMiddleware } from './middleware/session-middleware'

const app = express() //Creates an instance of express

app.use(bodyparser.json()) //Turns JSON string into a JS Object

app.use(loggingMiddleware) //Middleware for logging

app.use(sessionMiddleware) //Adds a session object to every req object. Access using req.session

//Available Endpoints

app.use('/login') //Registering the router with a base path of /Login

//Find Users, Update User, Update Reimbursement
app.use('/users') //Registering the router with a base path of /users

 //Find Users By ID
app.use('/users/:id') //Registering the router with a base path of /users/:id

//Find Reimbursement by Status
app.use('/reimbursements/status/:statusId') //Registering the router with a base path of /reimbursements/status/:statusId

//Find reimbursements by user
app.use('/reimbursements/author/userId/:userId') //Registering the router with a base path of /reimbursements/author/userId/:userId

 //submit reimbursement
app.use('/reimbursements') //Registering the router with a base path of /reimbursements


const PORT = 1001
app.listen(PORT || 1001, () => console.log(`The server has started on port: ${PORT}`));
