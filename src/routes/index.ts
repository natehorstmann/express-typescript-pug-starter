import { AsyncWrapper, NotFoundHandler } from '@middleware';
import { Request, Response, Router } from 'express';
import { OK } from 'http-status-codes';

// Init router and path
const router = Router();

router.get(
  '/',
  AsyncWrapper(async (req: Request, res: Response) => {
    return res.status(OK).json({ message: 'API OK' });
  }),
);

// Path Not Found
router.use(NotFoundHandler);

// Export the base-router
export default router;
