import User from "../model/Users.js";
import { generateToken, verifyRefreshToken } from "../util/token.js";

export const loginService = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        throw new Error("Invalid Email or Password");
    }
    const token = generateToken(user._id);
    return { ...token };
};

export const registerService = async ({ name, email, password }) => {
  const existEmail = await User.findOne({ email });
  if (existEmail) throw new Error("Email already registered");
  const user = new User({ name, email, password });
  await user.save();
  let token;
  try {
    token = generateToken(user._id);
  } catch (err) {
    await User.findByIdAndDelete(user._id);
    throw new Error("Can't Generate the Token");
  }
  return { ...token };
};

export const refreshService = async (refreshToken) => {
  if (!refreshToken) {
    throw new Error("Refresh token is required");
  }

  let userId;
  try {
    const decoded = verifyRefreshToken(refreshToken);
    userId = decoded.id;
  } catch (err) {
    throw new Error("Invalid or expired refresh token");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  const newToken = generateToken(user._id);
  return { ...newToken };
};
