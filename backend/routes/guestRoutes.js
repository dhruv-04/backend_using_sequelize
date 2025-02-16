const express = require('express');
const router = express.Router();
const { viewProfile, updateProfile, generateComplaint, orderRoomService, logoutUser } = require('../controllers/guestController');

//endpoint for user to view their profile
router.get('/profile/:username', viewProfile);

//endpoint to update the detail of the user
router.post('/profile/update/:username', updateProfile)

//endpoint for user to generate complaint
router.post('/complaint/:username', generateComplaint);

//endpoint for user to order room service
router.post('/roomService/:username', orderRoomService);

//endpoint for user to logout
router.delete('/logout/:username', logoutUser);

module.exports = router;