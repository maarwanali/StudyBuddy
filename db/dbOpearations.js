const config = require("./dbConfig");
const sql = require("mssql");

const registerUser = async (U) => {
  try {
    const pool = await sql.connect(config);
    const data = pool
      .request()
      .query(
        `EXEC register @email='${U.email}' , @password='${U.password}', @phoneNumber='${U.phoneNumber}' , @role='${U.role}'`
      );
    return data;
  } catch (err) {
    console.log(err);
  }
};

const logIn = async (email) => {
  try {
    const pool = await sql.connect(config);
    const data = pool.request().query(`EXEC logIn @email='${email}'`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const setRefreshToken = async (email, refreshToken) => {
  try {
    const pool = await sql.connect(config);
    const data = pool
      .request()
      .query(`EXEC setToken @email='${email}',@refreshToken='${refreshToken}'`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  registerUser,
  logIn,
  setRefreshToken,
};
