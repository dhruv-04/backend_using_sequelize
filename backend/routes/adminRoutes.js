const express = require('express');
const router = express.Router();
const { registerUser, searchAllGuest, searchGuest, generateBill, viewComplaints, viewUserComplaints, logoutAdmin } = require('../controllers/adminController');

//endpoint to register user
router.post('/registration', registerUser);

//endpoint to search all the users
router.get('/searchGuests', searchAllGuest);

//endpoint to search the user
router.get('/searchGuest/:username', searchGuest);

//endpoint to generate the bill of the user
router.get('/generateBill/:username', generateBill);

//endPoint to view complaints
router.get('/viewComplaints', viewComplaints);

//endPoint to view guest complaints
router.get('/viewComplaints/:username', viewUserComplaints);

//endpoint to logout the admin
router.delete('/logout', logoutAdmin);

module.exports = router;