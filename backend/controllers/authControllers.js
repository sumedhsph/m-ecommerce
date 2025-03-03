import adminModel from "../models/adminModel.js";

class AuthControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      console.log(admin)
      if (admin) {
      } else {
       // responseReture(res, 404, { error: "Email not Found" });
       console.log("Email not Found")
      }
    } catch (error) {
      //responseReture(res, 500, { error: error.message });
      console.log(error);
    }
  };
}
export default new AuthControllers();
