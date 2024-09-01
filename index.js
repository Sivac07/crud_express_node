import express from 'express';
import cors from 'cors';
import empRouters from './Routers/employee.router.js'
const app = express();

const PORT=4000;
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send("App is working correctly")
})

app.use('/api/emp',empRouters)

app.listen(PORT,()=>{
    console.log("App is listening in the port: ", PORT);
})
