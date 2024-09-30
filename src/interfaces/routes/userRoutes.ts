import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const userController = new UserController();
const router = Router();

router.post('/users', (req, res) => userController.createUser(req, res));

export default router;
