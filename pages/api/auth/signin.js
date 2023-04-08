const jwt = require("jsonwebtoken");
import { logIn, setRefreshToken } from "../../../db/dbOpearations";
import { setCookie } from "cookies-next";
const bcrypt = require("bcrypt");

export default async function login(req, res) {
  if (req.method == "POST") {
    try {
      const { email, password } = req.body;

      const { recordset } = await logIn(email);

      const hashedPassword = recordset[0].password;
      const userId = recordset[0].userId;

      const isVerifid = await bcrypt.compare(password, hashedPassword);

      if (!isVerifid) return res.json({ status: 402, msg: "Wrong Passwrod!" });

      const refreshToken = jwt.sign(
        { userId: userId },
        process.env.REFRESH_TOKEN_SECRET
      );

      const accessToken = jwt.sign(
        { userId: userId },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "15m",
        }
      );

      await setRefreshToken(username, refreshToken);

      setCookie("refresh-token", refreshToken, {
        req,
        res,
        httpOnly: true,
        secure: true,
      });

      return res.json({ status: 200, accessToken, userId });
    } catch (err) {
      return res.json({ status: 500, msg: err.message });
    }
  }
}
