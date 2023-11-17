import  express  from "express";
import { config } from 'dotenv';
import userRouter from './router/userInfoRouter.js'
config()

const app = express();

app.use(express.json())

app.use('/ping', function(req,res){
    res.send('Pong')
})

app.use('/api/user',userRouter)

app.use('*', (req,res) => {
    res.status(404).send('OPPS!! 404 page not found')
})
  
export default app