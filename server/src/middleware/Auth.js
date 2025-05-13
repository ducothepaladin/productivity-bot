import User from "../model/Users.js";
import { verifyAccessToken } from "../util/token.js";

export const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authentication token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = verifyAccessToken(token);

    req.user = await User.findOne({ _id });
    if (!req.user) {
      return res.status(404).json({ error: _id });
    }
    next();
  } catch (error) {
    res.status(401).json({ error: "Request is not authorized" });
  }
};
