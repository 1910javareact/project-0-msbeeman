import express from 'express'
import bodyparser from 'body-parser'

const app = express() //Creates an instance of express

app.use(bodyparser.json()) //Turns JSON string into a JS Object

app.use('/login')
app.use('users')
app.use('/users/:id')
app.use('/reimbursements/status/:statusId')
app.use('/reimbursements/author/userId/:userId')
app.use('/reimbursements')


const PORT = 1001
app.listen(PORT || 1001, () => console.log(`The server has started on port: ${PORT}`));
