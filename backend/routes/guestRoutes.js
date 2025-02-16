const express = require('express');
const router = express.Router();

//endpoint for user to view their profile
router.get('/profile/:username');

//endpoint to update the detail of the user
router.post('/profile/update')

//endpoint for user to generate complaint
router.post('/complaint/:username');

//endpoint for user to order room service
router.post('/roomService/:username');

//endpoint for user to logout
router.delete('/logout/:username');

module.exports = router;