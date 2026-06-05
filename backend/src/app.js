import express from "express";
import cors from "cors";

const app = express();

app.use(express.json({limit: "16kb"}));
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);



app.use((err, req, res, next) => {
    const statusCode = err.status || 500;

    res.status(statusCode).json({
        status: err.status || 500,
        message: err.message || "Something went wrong",
        errors: err.errors || null,
        data: err.data || null,
        ...(process.env.NODE_ENV !== "production" && {stack: err.stack})
    });
});

export default app;