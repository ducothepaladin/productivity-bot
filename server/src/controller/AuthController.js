import { loginService, refreshService, registerService } from "../services/authServices.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const { accessToken, refreshToken } = await registerService({ name, email, password });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(201).json({ accessToken });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { accessToken, refreshToken } = await loginService({ email, password });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ accessToken });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const refresh = async (req, res) => {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
        return res.status(401).json({ error: "Refresh token not found, please login again" });
    }

    try {
        const { accessToken, newRefreshToken } = await refreshService(refreshToken);

        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ accessToken });
    } catch (error) {
        res.status(403).json({ error: "Invalid refresh token, please login again" });
    }
};
