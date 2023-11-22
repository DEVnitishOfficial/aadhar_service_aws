import app from "./index.js";
import connectToDB from './config/dbConnection.js'
const PORT = process.env.PORT || 6000;



app.listen(PORT, async () => {
    await connectToDB()
    console.log(`Server is listening at http://localhost:${PORT}`)
})