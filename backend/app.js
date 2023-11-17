import  express  from "express";
import { config } from 'dotenv';
import cors from 'cors'
import userRouter from './router/userInfoRouter.js'
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(express.json())
app.use(cookieParser());
app.use(cors({ origin: [process.env.CLIENT_URL]}));



app.use('/api/user',userRouter)

app.use('*', (req,res) => {
    res.status(404).send('OPPS!! 404 page not found')
})
  
export default app