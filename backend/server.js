const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

// CORS configuration
app.use(cors({
    origin: "http://127.0.0.1:5501",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

const users = [
    {
        id: 1,
        name: "Malaika",
        email: "malaika@example.com",
        password: "123456"
    }
];

app.get("/", (req, res) => {
    res.send("Blog Application Backend is Running!");
});

// User Registration API
app.post("/api/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please provide name, email and password."
        });
    }

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({
            message: "Email already registered."
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password
    };

    users.push(newUser);

    res.status(201).json({
        message: "User registered successfully!",
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        }
    });
});

// User Login API
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Please provide email and password."
        });
    }

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password."
        });
    }

    res.json({
        message: "Login successful!",
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
});

// Create Blog API
app.post("/api/blogs", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            message: "Please provide title and content."
        });
    }

    const newBlog = {
        id: 1,
        title,
        content
    };

    res.status(201).json({
        message: "Blog created successfully!",
        blog: newBlog
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});