const jwt = require('../lib/jwt');
const  SECRET = "e1c22f91-8048-48d5-bda8-6df6897aa326";

exports.auth = async (request, response, next) =>{
    const token = request.cookies["auth"];

    if(token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);
            request.user = decodedToken;
            response.locals.user = decodedToken;
            response.locals.isAuthenticated = true;
            next();
        } catch(e) {
            console.log(e.message);
            response.clearCookie("auth");
            response.redirect('/login');
        }
    } else {
        next();
    }
};


exports.isAuth = (request, response, next) => {
    if(!request.user) {
        return response.redirect('/login');
    }
    next();
};