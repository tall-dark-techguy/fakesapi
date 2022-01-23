"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const winston_1 = __importDefault(require("winston"));
const posts_route_1 = __importDefault(require("./features/posts/posts.route"));
const auth_middleware_1 = __importDefault(require("./middlewares/auth.middleware"));
const app = express_1.default();
const PORT = process.env.PORT || 8080;
// Middlewares
auth_middleware_1.default(app);
// Routes
app.use("/posts", posts_route_1.default);
// Global error handler
app.use((error, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: error.message,
        errorCode: 500,
    });
});
// Start server
app.listen(PORT, () => winston_1.default.info(`App running on PORT:${PORT}`));
