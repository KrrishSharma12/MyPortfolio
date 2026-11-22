import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sendEmail } from "./sendEmail.js";
const app = express();
app.use(express.json());
const allowedOrigins = [
    "https://krish-sharma.vercel.app",
    "https://my-portfolio-gilt-six-75.vercel.app",
    "http://localhost:5173",
].filter(Boolean);

app.use(cors({
    origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Origin not allowed by CORS"));
        }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));

app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});
;

app.post("/send-email", async (req, res) => {
    const { name, subject, email, message } = req.body;
    if (!name || !subject || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const reply = await sendEmail(name, subject, email, message);
        res.status(200).json({ message: "Email sent successfully", reply });
    } catch (error) {
        res.status(500).json({ message: "Failed to send email", error });
    }
});
export default app;
