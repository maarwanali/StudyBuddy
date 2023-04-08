import { useLoginMutation } from "@/services/api/handleReqApiSlice";
import { useRouter } from "next/router";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [login] = useLoginMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await login({ email, password });

    if (data.status == 200) {
      console.log("Done !!!!!!!");
    }

    if (data.status != 200) {
      console.log(data.msg);
    }
  };

  const handleRedirect = () => {
    router.push("/signup");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-10">
        <h1 className="text-3xl font-bold mb-8">Sign In</h1>
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
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Sign In
          </button>
          <p
            onClick={handleRedirect}
            className=" opacity-70 cursor-pointer text-red-400 hover:text-red-600"
          >
            create new account
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
