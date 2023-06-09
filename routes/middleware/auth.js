const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  // Get auth token from request headers
  const authToken = req.headers.authorization;
 
  if (!authToken) {
    return res.status(401).json({ message: 'Unauthorized empty' });
  }

  try {
    console.log(authToken, process.env.JWT_SECRET);
    // Verify auth token
    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);
    console.log(decodedToken,'here');
    req.user = decodedToken.user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = authMiddleware;
