"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authenticate(app) {
    return app.use("/posts*", (req, res, next) => {
        try {
            // get token from Headers
            //  verify jwt token
            // allow access to api if true else block access to api
            const token = null;
            if (!token) {
                return res.status(401).json({
                    status: "error",
                    message: "You are not authorized to access this API",
                    errorCode: 401,
                });
            }
            next();
        }
        catch (error) {
            next(error);
        }
    });
}
exports.default = authenticate;
