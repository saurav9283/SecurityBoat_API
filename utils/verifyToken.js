import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token missing." });
  }

  jwt.verify(token, saurav, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Access denied: Invalid token." });
    }
    
    req.user = decoded;

    next();
  });
};

export default verifyToken;
