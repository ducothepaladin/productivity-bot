import { loginService, refreshService, registerService } from "../services/authServices.js";


export const register = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const {user, accessToken, refreshToken} = await registerService({name, email, password});

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json({user, accessToken});
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}


export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const {user, accessToken, refreshToken} = await loginService({email, password});

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({user, accessToken});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const refresh = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    try {
        const {accessToken} = await refreshService(refreshToken);
        res.status(200).json({accessToken});
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}