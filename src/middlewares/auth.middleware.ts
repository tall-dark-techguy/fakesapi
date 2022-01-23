import { Request, Response, NextFunction } from "express";

export default function authenticate(app: any) {
  return app.use(
    "/posts*",
    (req: Request, res: Response, next: NextFunction) => {
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
      } catch (error) {
        next(error);
      }
    }
  );
}
