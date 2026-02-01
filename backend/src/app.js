import express from 'express';
import cors from 'cors';
import announcementsRouter from './routes/announcments.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/announcements', announcementsRouter);

export default app;
