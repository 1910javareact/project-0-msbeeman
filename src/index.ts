import express from 'express'
import bodyparser from 'body-parser'

const app = express() //Creates an instance of express

app.use(bodyparser.json()) //Turns JSON string into a JS Object

const PORT = 1001
app.listen(PORT || 1001, () => console.log(`The server has started on port: ${PORT}`));
