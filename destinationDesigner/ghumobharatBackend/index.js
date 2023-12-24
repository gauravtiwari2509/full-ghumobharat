const express = require("express");
const app = express();
const collection = require("./models/mongodbTouristSIgnin");
const collection2 = require("./models/mongodbBusinessSignup");
const collection3 = require("./models/mongodbBusinessConnect");
const e_collection = require("./models/ecommschema");
const ecollection5=require("./models/informplace");
const cors = require("cors"); // Import the cors package

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS for all routes
app.use(cors());

app.post("/signup", async (req, resp) => {
  const { name, email, phoneNo, dob, password } = req.body;

  try {
    const data = {
      name,
      email,
      phoneNo,
      dob,
      password,
    };

    await collection.insertMany([data]);
    resp.json({ message: "Signup successful" }); // Send a response to the frontend
  } catch (error) {
    resp.status(500).json({ error: "Internal server error" }); // Handle errors appropriately
  }
});
// app.post("/login", async (req, resp) => {
//   const { email, password } = req.body;
//   try {
//     if (!email && !password) {
//       resp.json({ message: "invalid login credentials!" });
//     }
//     const user = await collection.findOne({ email });
//     console.log(user);
//     if (!user) {
//       return resp.json({ message: "user not found!" });
//     }
//     const passwordMatch = user.password;
//     if (password === passwordMatch) {
//       resp.status(200).json({message: "login successful" });
      
     
//     } else {
//       resp.status(500).json({ message: "invalid user !!" });
//     }
//   } catch (error) {
//     resp.status(500).json({ error: "Internal server error" }); // Handle errors appropriately
//   }
// });
app.post("/login", async (req, resp) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return resp.status(400).json({ message: "Invalid login credentials!" });
    }

    const user = await collection.findOne({ email });

    if (!user) {
      return resp.status(404).json({ message: "User not found!" });
    }

    const passwordMatch = user.password;

    if (password === passwordMatch) {
      // Send user details along with the success message
      return resp.status(200).json({
        message: "Login successful",
        name: user.name, // Assuming 'name' is a field in your user object
        // Add other user details you want to send here
      });
    } else {
      return resp.status(401).json({ message: "Invalid password!" });
    }
  } catch (error) {
    resp.status(500).json({ error: "Internal server error" }); // Handle errors appropriately
  }
});


app.post("/busisnessSignup", async (req, resp) => {
  const {  yourName,businessName,  email, phoneNo,address, businessType, password,businessDescription,additionalInfo } = req.body;


  try {
    const data = {
      yourName,
      businessName,
      email,
      phoneNo,
      address,
      businessType,
      password,
      businessDescription,
      additionalInfo,
    };

    await collection2.insertMany([data]);
    resp.json({ message: "Business Page Signup successful" });
  } catch (error) {
    resp.status(500).json({ error: "Internal server error" });
  }
});

app.post("/businesslogin", async (req, resp) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return resp.status(400).json({ message: "Invalid login credentials!" });
    }

    const user2 = await collection2.findOne({ email });

    if (!user2) {
      return resp.status(404).json({ message: "User not found!" });
    }
    
    const passwordMatch = user2.password;
    
    if (password === passwordMatch) {
      // Send user details along with the success message
      return resp.status(200).json({
        message: "Login successful",
        yourName: user2.yourName, // Assuming 'name' is a field in your user object
        // Add other user details you want to send here
      });
    } else {
      return resp.status(401).json({ message: "Invalid password!" });
    }
  } catch (error) {
    resp.status(500).json({ error: "Internal server error" }); // Handle errors appropriately
  }
});

app.post("/businessconnect", async (req, resp) => {
  const { businessName, email, phoneNo, address, businessType, taxID, password, businessDescription, additionalInfo } = req.body;

  try {
    const data = {
      businessName,
      email,
      phoneNo,
      address,
      businessType,
      taxID,
      password,
      businessDescription,
      additionalInfo,
    };

    await collection3.insertOne(data); 
    resp.json({ message: "Signup successful" }); 
  } catch (error) {
    resp.status(500).json({ error: "Internal server error" }); // Handle errors appropriately
  }
});


app.post("/review", async (req, resp) => {


  const { productQuality, customerService, cleanlinessAmbiance, valueForMoney, convenienceTimeliness, overallExperience, timeSpent } = req.body;

  try {
    const data = {
      productQuality,
      customerService,
      cleanlinessAmbiance,
      valueForMoney,
      convenienceTimeliness,
      overallExperience,
      timeSpent

    };

    await e_collection.insertMany([data]);
    resp.json({ message: "Reviewed successfully" });
  } catch (error) {
    resp.status(500).json({ error: "Internal server error" });
  }
});


app.post("/informplace", async (req, resp) => {
  const {  name,state,city,description,thingsToDo,bestTimeToVisit,nearbyAttractions } = req.body;

  try {
    const data = {
      name,
      state,
      city,
      description,
      thingsToDo,
      bestTimeToVisit,
      nearbyAttractions

     
    };

    await ecollection5.create(data);
    resp.json({ message: "Signup successful" });
  } catch (error) {
    resp.status(500).json({ error: "Internal server error" });
  }
});
app.listen(5000, () => {
  console.log("Server connected on port 5000");
});
