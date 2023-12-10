const express = require('express')
const app = express()
const port = 3004
import { UserInput } from "common" 

app.use(express.json());

app.get('/', (req: any, res: any) => {
  let parsedUser = UserInput.safeParse(req.body);
  if (!parsedUser.success) {
    res.send('Incorrect input for harkirat!, try again.')
    return;
  }
  res.send('correct input!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//hello just making a change to trigger yaml