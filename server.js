import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import PostRoute from './routes/post.route.js'
import connectWithMongoDB from './db/Connection1.js'
import cors from 'cors'

app.use(cors({}));
    

connectWithMongoDB();

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', PostRoute);

app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false,
    })
})

app.listen(8000, () => {
    console.log("Server is listening on port http://localhost:8000");
})

