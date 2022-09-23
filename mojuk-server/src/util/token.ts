import jwt = require("jsonwebtoken");

const initializeToken = (userID: any) => {
  const accessToken = jwt.sign(
    {
      type: "jwt",
      tokenType: "access",
      userID: userID,
      iat: Math.floor(Date.now() / 1000) - 30,
    },
    process.env.SERVER_SECRET_KEY,
    { algorithm: "HS256", expiresIn: "5m" }
  );

  const refreshToken = jwt.sign(
    {
      type: "jwt",
      tokenType: "refresh",
      userID: userID,
      iat: Math.floor(Date.now() / 1000) - 30,
    },
    process.env.SERVER_SECRET_KEY,
    { algorithm: "HS256", expiresIn: "365d" }
  );
  return { accessToken, refreshToken };
};

export const token = initializeToken;
