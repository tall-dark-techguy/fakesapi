import express, { Request, Response, NextFunction } from "express";
import winston from "winston";
import postsRoutes from "./features/posts/posts.route";
import authenticate from "./middlewares/auth.middleware";

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
authenticate(app);

// Routes
app.use("/posts", postsRoutes);

// Global error handler
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    status: "error",
    message: error.message,
    errorCode: 500,
  });
});

// Start server
app.listen(PORT, () => winston.info(`App running on PORT:${PORT}`));
