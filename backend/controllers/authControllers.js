import adminModel from "../models/adminModel.js";
import responseReturn from "../utils/responseReturn.js";
import bcrypt from "bcrypt";
import createToken from "../utils/tokenCreate.js";

class AuthControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    //console.log(req.body)
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      console.log(admin)
      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        //console.log(match);
        if(match){
          const token = await createToken({
            id: admin.id,
            role: admin
          })
          res.cookie('accessToken', token, {
            expires: new Date(Date.now() + 7*24*60*60*1000)
          })
          responseReturn(res, 200, {token, message: "Login Successful"})
        } else{
          responseReturn(res, 404, { error: "Wrong Password" });   
        }
      } else {
       responseReturn(res, 404, { error: "Email not Found" });
       console.log("Email not Found")
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
      console.log(error);
    }
  };

  getUser = async (req, res) => {
    const {id, role} = req;
    try {
      if(role === "admin"){
        const user = await adminModel.findById(id);
        responseReturn(res, 200, {userInfo: user});
      }else {
        console.log('seller info');
      }
    } catch (error) {
      responseReturn(res, 500, {error: error.message});
      console.log(error.message);
    }
  }
}
export default new AuthControllers();
