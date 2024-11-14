// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import env from 'dotenv';
// import pg from 'pg';

// env.config();

// const app = express();
// const port = 3000;

// const db = new pg.Client({
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT,
// });

// db.connect();

// const products = [
//     {
//         id: 1,
//         name: "Wireless Bluetooth Headphones",
//         price: 49.99,
//         rating: 4.5,
//         image: "https://example.com/images/headphones.jpg"
//     },
//     {
//         id: 2,
//         name: "Smart Watch with Heart Rate Monitor",
//         price: 79.99,
//         rating: 4.3,
//         image: "https://example.com/images/smartwatch.jpg"
//     },
//     {
//         id: 3,
//         name: "Portable Charger 10000mAh",
//         price: 25.99,
//         rating: 4.7,
//         image: "https://example.com/images/charger.jpg"
//     },
//     {
//         id: 4,
//         name: "USB-C Laptop Docking Station",
//         price: 89.99,
//         rating: 4.2,
//         image: "https://example.com/images/dockingstation.jpg"
//     }
// ];

// // Products route to send the example products list
// app.get("/products", (req, res) => {
//     console.log("hola");
//     res.json(products);
// });

// // Use CORS to allow requests from your frontend origin
// app.use(cors({
//     origin: 'http://localhost:5173', //  frontend's URL
//     methods: ['GET', 'POST'], // Allow specific methods
//     credentials: true // Enables to handle cookies
// }));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.redirect("http://localhost:5173/app#dashboard");
// });

// app.post("/login", async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const user = await db.query("SELECT * FROM users WHERE username = $1", [username]);

//         if (user.rows.length === 0) {
//             console.log("hi");
//             return res.status(404).json({ message: "Username does not exist" });
//         }

//         const isPasswordCorrect = user.rows[0].password === password;
//         if (!isPasswordCorrect) {
//             return res.status(401).json({ message: "Incorrect password" });
//         }

//         res.status(200).json({ message: "Login successful" });
//     } catch (error) {
//         console.error("Error during login:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });


// app.post("/register", async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const existingUser = await db.query("SELECT * FROM users WHERE email = $1 OR username = $2", [email, username]);

//         if (existingUser.rows.length > 0) {
//             const duplicateField = existingUser.rows[0].email === email ? "Email" : "Username";
//             return res.status(409).json({ message: `${duplicateField} already exists` });
//         }

//         await db.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, email, password]);
//         res.status(201).json({ message: "Registration successful" });
//     } catch (error) {
//         console.error("Error during registration:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });


// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import env from 'dotenv';
// import pg from 'pg';

// env.config();

// const app = express();
// const port = 3000;

// // Use CORS to allow requests from your frontend origin
// app.use(cors({
//     origin: 'http://localhost:5173', // Allow only your frontend's URL
//     methods: ['GET', 'POST'], // Allow specific methods
//     credentials: true // Enables handling cookies
// }));

// const db = new pg.Client({
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT,
// });

// db.connect();

// // Define example products data
// const products = [
//     {
//         id: 1,
//         name: "Wireless Bluetooth Headphones",
//         price: 49.99,
//         rating: 4.5,
//         image: "https://picsum.photos/200/200?random=1"
//     },
//     {
//         id: 2,
//         name: "Smart Watch with Heart Rate Monitor",
//         price: 79.99,
//         rating: 4.3,
//         image: "https://picsum.photos/200/200?random=2"
//     },
//     {
//         id: 3,
//         name: "Portable Charger 10000mAh",
//         price: 25.99,
//         rating: 4.7,
//         image: "https://picsum.photos/200/200?random=3"
//     },
//     {
//         id: 4,
//         name: "USB-C Laptop Docking Station",
//         price: 89.99,
//         rating: 4.2,
//         image: "https://picsum.photos/200/200?random=4"
//     }, {
//         id: 5,
//         name: "Wireless Bluetooth Headphones",
//         price: 49.99,
//         rating: 4.5,
//         image: "https://picsum.photos/200/200?random=1"
//     },
//     {
//         id: 6,
//         name: "Smart Watch with Heart Rate Monitor",
//         price: 79.99,
//         rating: 4.3,
//         image: "https://picsum.photos/200/200?random=2"
//     },
//     {
//         id: 7,
//         name: "Portable Charger 10000mAh",
//         price: 25.99,
//         rating: 4.7,
//         image: "https://picsum.photos/200/200?random=3"
//     },
//     {
//         id: 8,
//         name: "USB-C Laptop Docking Station",
//         price: 89.99,
//         rating: 4.2,
//         image: "https://picsum.photos/200/200?random=4"
//     }
// ];

// // Products route to send the example products list
// app.get("/products", (req, res) => {
//     res.json(products);
// });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// app.post("/login", async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const user = await db.query("SELECT * FROM users WHERE username = $1", [username]);

//         if (user.rows.length === 0) {
//             console.log("hi");
//             return res.status(404).json({ message: "Username does not exist" });
//         }

//         const isPasswordCorrect = user.rows[0].password === password;
//         if (!isPasswordCorrect) {
//             return res.status(401).json({ message: "Incorrect password" });
//         }

//         res.status(200).json({ message: "Login successful" });
//     } catch (error) {
//         console.error("Error during login:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });


// app.post("/register", async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const existingUser = await db.query("SELECT * FROM users WHERE email = $1 OR username = $2", [email, username]);

//         if (existingUser.rows.length > 0) {
//             const duplicateField = existingUser.rows[0].email === email ? "Email" : "Username";
//             return res.status(409).json({ message: `${duplicateField} already exists` });
//         }

//         await db.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, email, password]);
//         res.status(201).json({ message: "Registration successful" });
//     } catch (error) {
//         console.error("Error during registration:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });


import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from 'dotenv';
import pg from 'pg';
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import bcrypt from "bcrypt";

env.config();

const app = express();
const port = 3000;

 const products = [
        {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            price: 49.99,
            rating: 4.5,
            image: "https://picsum.photos/200/200?random=1"
        },
        {
            id: 2,
            name: "Smart Watch with Heart Rate Monitor",
            price: 79.99,
            rating: 4.3,
            image: "https://picsum.photos/200/200?random=2"
        },
        {
            id: 3,
            name: "Portable Charger 10000mAh",
            price: 25.99,
            rating: 4.7,
            image: "https://picsum.photos/200/200?random=3"
        },
        {
            id: 4,
            name: "USB-C Laptop Docking Station",
            price: 89.99,
            rating: 4.2,
            image: "https://picsum.photos/200/200?random=4"
        }, {
            id: 5,
            name: "Wireless Bluetooth Headphones",
            price: 49.99,
            rating: 4.5,
            image: "https://picsum.photos/200/200?random=1"
        },
        {
            id: 6,
            name: "Smart Watch with Heart Rate Monitor",
            price: 79.99,
            rating: 4.3,
            image: "https://picsum.photos/200/200?random=2"
        },
        {
            id: 7,
            name: "Portable Charger 10000mAh",
            price: 25.99,
            rating: 4.7,
            image: "https://picsum.photos/200/200?random=3"
        },
        {
            id: 8,
            name: "USB-C Laptop Docking Station",
            price: 89.99,
            rating: 4.2,
            image: "https://picsum.photos/200/200?random=4"
        }
    ];
// Use CORS to allow requests from your frontend origin
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
}));

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect();

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup express-session for handling session management
app.use(session({
    secret: process.env.SESSION_SECRET, // use a strong secret in production
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS in production
}));

// Initialize Passport and restore authentication state
app.use(passport.initialize());
app.use(passport.session());

// Define Passport Local Strategy
passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            
            const user = await db.query("SELECT * FROM users WHERE username = $1", [username]);
            if (user.rows.length === 0) {
                
                return done(null, false, { message: "Username does not exist" });
            }
            const isPasswordCorrect = await bcrypt.compare(password, user.rows[0].password);
            if (!isPasswordCorrect) {
                return done(null, false, { message: "Incorrect password" });
            }

            // console.log(user.rows[0]);
            return done(null, user.rows[0]);
            
            
        } catch (error) {
            return done(error);
        }
    }
));

// Serialize user into the session
passport.serializeUser((user, done) => {
    done(null, user.id); // Make sure `user.id` is being passed correctly
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
    try {
        const user = await db.query("SELECT * FROM users WHERE id = $1", [id]);
        done(null, user.rows[0]);
    } catch (error) {
        done(error, null);
    }
});



// Register route with hashed passwords
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await db.query("SELECT * FROM users WHERE email = $1 OR username = $2", [email, username]);

        if (existingUser.rows.length > 0) {
            const duplicateField = existingUser.rows[0].email === email ? "Email" : "Username";
            return res.status(409).json({ message: `${duplicateField} already exists` });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, email, hashedPassword]);
        res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Login route using Passport.js
app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return res.status(500).json({ message: "Server error" });
        if (!user) return res.status(401).json({ message: info.message || "Unauthorized" });
        
        req.logIn(user, (err) => {
            if (err) return res.status(500).json({ message: "Failed to log in" });
            return res.status(200).json({ message: "Login successful" });
        });
    })(req, res, next);
});

// app.post("/login", (req, res, next) => {
//     passport.authenticate("local", (err, user, info) => {
//         if (err) return res.status(500).json({ message: "Server error" });
//         if (!user) return res.status(401).json({ message: info.message || "Unauthorized" });
        
//         req.logIn(user, (err) => {
//             if (err) return res.status(500).json({ message: "Failed to log in" });
            
//             // Explicitly save the session after login
//             req.session.user = {
//                 id: user.id,
//                 username: user.username,
//                 email: user.email
//               };
          
//             // console.log("User authenticated, session data:", req.session.user);
//             req.session.save((err) => {
//                 if (err) return res.status(500).json({ message: "Failed to save session" });
//                 // console.log("session saved");
                
//                 return res.status(200).json({ message: "Login successful" });
//             });
//         });
//     })(req, res, next);
// });


// Logout route
app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: "Failed to logout" });
        }
        req.session.destroy(); // Destroy session on logout
        
        res.status(200).json({ message: "Logout successful" });
    });
});


// Middleware to protect routes
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: "Unauthorized" });
}

// Example protected route
app.get("/protected", isAuthenticated, (req, res) => {
    res.json({ message: "This is a protected route", user: req.user });
});


// Enhanced session-status route for debugging
app.get("/session-status", (req, res) => {
    // console.log("Session data:", req.session); // Log the session data
    // console.log("User from session:", req.user); // Log the user data in session
    
    if (req.isAuthenticated()) {
        // console.log("User is authenticated");
        return res.status(200).json({ authenticated: true });
    }
    
    // console.log("User is not authenticated");
    res.status(401).json({ authenticated: false });
});




app.get("/products", (req, res) => {    
    res.json(products);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
