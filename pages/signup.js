import { useRouter } from "next/router";
import { useState } from "react";
import { useRegisterMutation } from "@/services/api/handleReqApiSlice";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("student");
  const router = useRouter();
  const [useRegister] = useRegisterMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await useRegister({ email, password, phone, role });

    if (data.status == 200) {
      console.log("Signed Up successfully");
    }
  };

  const handleRedirect = () => {
    router.push("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-10">
        <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center space-y-4"
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-lg mb-2">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="role" className="text-lg mr-2 mb-2">
              Sign up as:
            </label>
            <select
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Sign Up
          </button>

          <p
            onClick={handleRedirect}
            className=" opacity-70 cursor-pointer  text-red-400 hover:text-red-600"
          >
            Back to sign in page
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
