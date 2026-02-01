import { Router } from 'express';
import {
  createAnnouncement,
  getAnnouncements,
  getAnnouncement,
  deleteAnnouncement,
} from '../controller/announcements.controller.js';

const router = Router();

router.post('/', createAnnouncement);
router.get('/', getAnnouncements);
router.get('/:id', getAnnouncement);
router.delete('/:id', deleteAnnouncement);

export default router;
