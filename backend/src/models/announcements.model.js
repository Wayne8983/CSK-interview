import { announcements } from '../store/announcments.store.js';

/**
 * @typedef {Object} Announcement
 * @property {string} id
 * @property {string} title
 * @property {string} message
 * @property {string} createdAt
 */

export const createAnnouncement = (title, message) => {
  const announcement = {
    id: Date.now().toString(),
    title,
    message,
    createdAt: new Date().toISOString(),
  };
  announcements.push(announcement);
  return announcement;
};

export const getAnnouncements = () => announcements;

export const getAnnouncementById = (id) => announcements.find(a => a.id === id);

export const deleteAnnouncement = (id) => {
  const index = announcements.findIndex(a => a.id === id);
  if (index > -1) {
    return announcements.splice(index, 1)[0];
  }
  return null;
};
