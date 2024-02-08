import jwt from "jsonwebtoken";

const generateTokenAndSetcookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "365d",
  });

  res.cookie("jwt", token, {
    maxAge: 365 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== 'development',
  });
};

export default generateTokenAndSetcookie;
