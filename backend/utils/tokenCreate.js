import jwt from "jsonwebtoken";

const createToken = async (data) => {
    const token = await jwt.sign(data, process.env.SECRETE,{
        expiresIn:'7d'
    })
    //console.log(process.env.SECRETE);
    return token;
}

export default createToken;