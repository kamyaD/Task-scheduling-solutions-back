import jwt from 'jsonwebtoken';

const authenticateUser = (req, res) => {
  const Authorization = req.headers.authorization;
  if (!Authorization) {
    const message = {
      "error":{
        "Authorization": "Authorization headers missing"
      }
    };
    return res.json(message);
  }
  const token = Authorization.replace('Bearer ', '');
  try {
    return jwt.verify(token, process.env.SECRET_KEY);
  }catch (e) {
    const message = {
      "error":{
        "Authorization": "Invalid token"
      }
    };
    return res.json(message);
  }
};

export default authenticateUser;
