import express from 'express';
import { MessageController } from '../controllers/message-controller.js';

const router = express.Router();

router.post('/send', MessageController.sendMessage);
router.get('/get', MessageController.getMessages);
router.patch('/read/:messageId', MessageController.markAsRead);

export default router;
