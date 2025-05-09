import User from "../model/Users.js";
import { verifyAccessToken } from "../util/token.js";



export const auth = async (req, res, next) => {

    const { Authorization } = req.headers;

    if(!Authorization) {
        return res.status(401).json({error: "Authentication token required"});
    }


    const token = Authorization.split(" ")[1];

    try {
        const { _id } = verifyAccessToken(token);

        req.user = await User.findOne({_id});
        next();
    } catch(error) {
        res.status(401).json({ error: "Request is not authorized" });
    }
}