import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
import logger from 'morgan';
import path from 'path';
import BaseRouter from './routes';
import { ErrorHandler, NotFoundHandler } from '@middleware';

// Init express
const app = express();

// set 'trust proxy' true to get the correct req.ip when running
// as cloud run container
app.set('trust proxy', true);

// Add middleware/settings/routes to express.
app.use(logger('dev'));
app.use(cors());
app.options('*', cors()); // CORS preflight
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', BaseRouter);

/**
 * Point express to the 'views' directory. If you're using a
 * single-page-application framework like react or angular
 * which has its own development server, you might want to
 * configure this to only serve the index file while in
 * production mode.
 */
app.set('view engine', 'pug');
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));
app.get('/', (req: Request, res: Response) => {
  res.render('index', { title: 'Express TS Starter' });
});

// Error handling
app.use(ErrorHandler);

// Path Not Found
app.use((req: Request, res: Response) => {
  res.status(404).render('404', { title: 'Express TS Starter - Page Not Found' });
});

// Export express instance
export default app;
