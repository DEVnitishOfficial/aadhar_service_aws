import  express  from "express";
import cors from 'cors'
import userRouter from './router/userInfoRouter.js'
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import User from "./model/userInfoSchema.js";
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

// app.use(cors({ origin: [process.env.CLIENT_URL]}));
app.use('/api/user',userRouter)
// app.get('/api/user/getUser/:fullName', async (req, res) => {
//     try {
//       const user = await User.findOne({ fullName: req.params.fullName });
//       if (user) {
//         res.status(200).json(user);
//       } else {
//         res.status(404).json({ message: 'User not found' });
//       }
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
  

app.use('*', (req,res) => {
    res.status(404).send('OPPS!! 404 page not found')
})
  
export default app