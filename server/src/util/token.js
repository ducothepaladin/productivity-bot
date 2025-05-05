import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

const accessSecret = process.env.ACCESS_SECRET;
const refreshSecret = process.env.REFRESH_SECRET;


export const generateToken = (userId) => {
    const accessToken = jwt.sign({id: userId}, accessSecret, {expiresIn: "15m"});
    const refreshToken = jwt.sign({id: userId}, refreshSecret, {expiresIn: "7d"});
    return {accessToken, refreshToken}
}

export const verifyAccessToken = (token) => {
    return jwt.verify(token, accessSecret);
}

export const verifyRefreshToken = (token) => {
    return jwt.verify(token, refreshSecret);
}