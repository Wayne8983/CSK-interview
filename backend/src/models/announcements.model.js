import { announcements } from '../store/announcments.store.js';

/**
 * @typedef {Object} Announcement
 * @property {string} id
 * @property {string} title
 * @property {string} message
 * @property {string} createdAt
 */

export const createAnnouncement = (title, message) => {
  //your code
  const announcement = {
    id : announcements.length+1 ,
    title,
    message,
    createdAt:new Date().toDateString()
  }

  announcements.push(announcement);
  return announcement;

};

export const getAnnouncements = () => {
  //your code
  return announcements;

}

export const getAnnouncementById = (id) => {
  //your code
  const id_ = Number(id);
  const announcement = announcements.find(a=>a.id ===id_);
  return announcement;

}

export const deleteAnnouncement = (id) => {
  //your code
  const announcement = announcements.splice(id,1);
  return announcements

};
