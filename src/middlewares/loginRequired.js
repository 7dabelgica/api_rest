import jwt from 'jsonwebtoken';
import User from '../models/User';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Você precisa fazer login'],
    });
  }

  const [texto, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    const user = User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      errors: ['Token inválido ou expirado'],
    });
  }
};
