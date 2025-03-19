import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { accessToken } = res.cookies;

  if (!accessToken) {
    return res.status(401).json({ error: "Please login first" });
  } else {
    try {
      const decodeToken = await jwt.verify(accessToken, process.env.SECRETE);
      req.role = decodeToken.role;
      req.id = decodeToken.id;
      next();
    } catch (error) {return res.status(403).json({ error: "Please login" });}
  }
};

export default authMiddleware;
