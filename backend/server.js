/*import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import path from 'path'
import { fileURLToPath } from 'url';
import resumeRoutes from './routes/resumeRoutes.js';





const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const PORT = 4000;

app.use(cors())

//CONNECT DB
connectDB();
//MIDDLEWARE
app.use(express.json())

app.use('/api/auth',userRoutes)
app.use('/api/resume',resumeRoutes)

app.use(
    '/uploads',
    express.static(path.join(__dirname, 'upload'),{
       setHeaders: (res, _path)=>{
        res.set('Access-Control-Allow-Orgin','http://localhost:5173')

    }
})
)


//ROUTES

app.get('/',(req,res)=>{
    res.send('API WORKING')
})

app.listen(PORT,()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
})
*/
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import path from 'path'
import { fileURLToPath } from 'url';
import resumeRoutes from './routes/resumeRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();

// ✅ Render dynamic port
const PORT = process.env.PORT || 4000;

// ✅ CORS allow all (Vercel + browser)
app.use(cors({
  origin: '*',
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

// CONNECT DB
connectDB();

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.use('/api/auth', userRoutes)
app.use('/api/resume', resumeRoutes)

// STATIC UPLOADS
app.use(
  '/uploads',
  express.static(path.join(__dirname, 'uploads'))
)

// TEST ROUTE
app.get('/', (req,res)=>{
  res.send('API WORKING')
})

app.listen(PORT, ()=>{
  console.log(`Server Started on port ${PORT}`)
})
