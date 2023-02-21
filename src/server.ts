import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port = 8080
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!')
})

app.listen(port, () => {
  console.log(`Running at: http://localhost:${port}`)
})