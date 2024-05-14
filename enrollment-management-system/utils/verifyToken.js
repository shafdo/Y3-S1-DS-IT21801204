import jwt from "jsonwebtoken";
import { createError } from "./error.js";

verifytoken.js

export const verifyToken = (req, res, next) => {
    const token = req.cookies.auth;

    if(!token){
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err)
            return next(createError(403, "Token is not valid!"));

        req.user = user;
        next();
    
    });2

};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id){
            next();
        } else{
             return next( createError(403, "You are not authorized!!!"));
        }
    })
}
