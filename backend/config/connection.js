const db = require('./dbconfig');
const  Guests  = require('../models/guestModel');
const  PastGuests  = require('../models/pastGuests');
const  AdminModel  = require('../models/adminModel');
const  Complaint  = require('../models/complaint');
const  ExpiredTokens = require('../models/expiredTokens');
const  RoomAvailable  = require('../models/roomAvailable');
const  RoomServiceModel  = require('../models/roomService');
const  RoomServiceUtilizedModel  = require('../models/roomServiceModel');

Guests.hasMany(Complaint, { foreignKey: 'guest_ID', onDelete: 'CASCADE'});
Complaint.belongsTo(Guests, { foreignKey: 'guest_ID' });

Guests.hasMany(RoomServiceUtilizedModel, { foreignKey: 'guest_ID', onDelete: 'CASCADE' });
RoomServiceUtilizedModel.belongsTo(Guests, {foreignKey: 'guest_ID' });

const room_available = [
    {
        room_name: "DOUBLE BED ROOM",
        room_code: "DB",
        room_cost: 7000,
        room_available: 80,
    }, 
    {
        room_name: "SINGLE BED ROOM",
        room_code: "SB",
        room_cost: 5000,
        room_available: 100,        
    },
    {
        room_name: "LUXURY BED ROOM",
        room_code: "LB",
        room_cost: 15000,
        room_available: 20,
    }
];


const room_service = [
    {
        service_name: "Water",
        service_cost: 50,
        service_code: 'W',
    },
    {
        service_name: "Tea/Coffee",
        service_cost: 50,
        service_code: 'T',
    },
    {
        service_name: "Juice",
        service_cost: 30,
        service_code: 'J',
    },
    {
        service_name: "Cleaning",
        service_cost: 0,
        service_code: 'CL',
    },
];

const main = async() => {
    try {
        await db.sync({ alter: true });
        await RoomAvailable.bulkCreate(room_available, { ignoreDuplicates: true });
        await RoomServiceModel.bulkCreate(room_service, { ignoreDuplicates: true });
        console.log('Database synced and seeded successfully!');
    } catch(error) {
        console.error(`Error syncing database : `, error);
    }
};

main();