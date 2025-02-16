const express = require('express');
const router = express.Router();

//endpoint to register user
router.post('/registration');

//endpoint to search all the users
router.get('/searchGuests');

//endpoint to search the user
router.get('/searchGuest/:username');

//endpoint to generate the bill of the user
router.get('/generateBill/:username');

//endPoint to view complaints
router.get('/viewComplaints');

//endPoint to view guest complaints
router.get('/viewComplaints/:username');

//endpoint to logout the admin
router.delete('/logout');

module.exports = router;