import jwt from 'jsonwebtoken';

const authentication = async (req, res, next) => {
    try {

       
        const token = req.headers.authorization.split(" ")[1];
     
        const isCustomUser = token.length < 500;

        let decodedData;
      
        if (token && isCustomUser) {
         
            decodedData = jwt.verify(token, '@user');
            console.log("Custom token");
            console.log(decodedData);
          
            req.userId = decodedData?.id;
            req.userName = decodedData?.name;
          
        } else {
            decodedData = jwt.decode(token);
            console.log("Google token");
            console.log(decodedData);
        
            req.userId = decodedData?.sub;
            req.userName = decodedData?.name;
        }
        next();

    } catch (error) {
        console.log(error);
    }
};

export default authentication;
