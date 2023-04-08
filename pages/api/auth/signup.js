const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import { registerUser } from "../../../db/dbOpearations.js";

export default async function signup(req, res) {
  if (req.method === "POST") {
    try {
      const { email, password, phone, role } = req.body;

      console.log(password);
      const hash = await bcrypt.hash(password, 10);

      const U = {
        email: email,
        password: hash,
        phoneNumber: phone,
        role: role,
      };

      await registerUser(U);
      // if(recordset.lenght ==0 ) return

      return res.json({ status: 200 });
    } catch (err) {
      return res.json({ status: 500, msg: err.message });
    }
  }
}
