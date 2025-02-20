import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { Router } from './routes';


const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use(Router())


export { app }