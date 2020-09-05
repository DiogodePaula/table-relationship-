// middleware bloqueia o que não atende os requisitos de chagar as rotas 
import jwt from 'jsonwebtoken';
import authConfig from '../../../config/auth';

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: 'Token não enviado'
        });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, authConfig.secret);

        req.userUid = decoded.uid;

        next();
    } catch (error) {
        return res.status(401).json({
            error: 'Token Invalido'
        });
    }

};