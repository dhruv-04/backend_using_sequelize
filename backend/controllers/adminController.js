
//function to create the user in the database
const registerUser = async(req, res) => {
    try {
        //logic
        const guestUsernameAndPassword = {};
        res.status(201).json({ message: "User Created Successfully!", guestCredentials: guestUsernameAndPassword });
    } catch (err) {
        console.error(`Error creating user : ${err}`);
        res.status(500).json({ message: `Error creating user : ${err}` });
    }
}

//function to search for all guests in the database
const searchAllGuest = async(req, res) => {
    try {
        //logic
        res.status(200).json({ message: "Data Fetched."});
    } catch (err) {
        console.error(`Error fetching details : ${err}`);
        res.status(500).json({ message: `Error fetching details : ${err}` });
    }
}

//function to search for guest in the database
const searchGuest = async(req, res) => {
    try {
        //logic
        const username = req.params.username;
        res.status(200).json({ message: "Data Fetched."});
    } catch (err) {
        console.error(`Error fetching details : ${err}`);
        res.status(500).json({ message: `Error fetching details : ${err}` });
    }
}

//function to generate bill
const generateBill = async (req, res) => {
    try {
        //logic
        const username = req.params.username;
        res.status(201).json({ message: "Bill generated." });
    } catch (err) {
        console.log(`Error generating bill : ${err}`);
        res.status(500).json({ message: `INTERNAL SERVER ERROR : ${err}` });
    }
};

//function to view all complaints
const viewComplaints = async(req, res) => {
    try {
        res.status(200).json({ mesage: "Data fetched." });
    } catch (err) {
        console.error(`Error fetching data : ${err}`);
        res.status(500).json({ message: `Error fetching data : ${err}`});
    }
};

//function to view all complaints
const viewUserComplaints = async(req, res) => {
    try {
        const username = req.params.username;
        res.status(200).json({ mesage: "Data fetched." });
    } catch (err) {
        console.error(`Error fetching data : ${err}`);
        res.status(500).json({ message: `Error fetching data : ${err}`});
    }
};


//function to logout the user
const logoutAdmin = async (req, res) => {
    try {
        res.status(201).json({ message: "Logout Successful!" });
    } catch (err) {
        console.error(`Error logging out : ${err}`);
        res.status(500).json({ message: `Error logging : ${err}`});
    }
}

module.exports = {
    registerUser,
    searchAllGuest,
    searchGuest,
    generateBill,
    viewComplaints,
    viewUserComplaints,
    logoutAdmin,
}