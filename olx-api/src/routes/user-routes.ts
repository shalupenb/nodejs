import { Router } from 'express';
import { UserController } from '../controllers/user-controller.js';

const router = Router();

router.post('/', UserController.createUser); 
router.get('/', UserController.getUsers);  
router.get('/:id', UserController.getUserById);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);
router.post('/login', UserController.login);
export default router;
