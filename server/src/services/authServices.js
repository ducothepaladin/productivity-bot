import User from "../model/Users.js";
import { generateToken, verifyRefreshToken } from "../util/token.js";

export const loginService = async ({ email, password }) => {
    const user = await User.findOne({email});
    if(!user || !(await user.comparePassword(password))) {
        throw new Error("Invaild Email or Password");
    }
    const token = generateToken(user._id);
    return { user, ...token};
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
  return { user, ...token };
};

export const refreshService = async (token) => {

  if(!token) throw new Error('No refresh token provided')


  const payload = verifyRefreshToken(token);
  
  if(!payload) {
    throw new Error('Invailid Token');
  }

  const user = await User.findById(payload.id);
  if(!user) {
    throw new Error('user not found');
  }

  const {accessToken} = generateToken(user._id);

  return {accessToken};

};
