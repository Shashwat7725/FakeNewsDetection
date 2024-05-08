import React from "react";

const Login = (props) => {
  const handleLogin = (e) => {
    // currently password currPass
    // userInfo.find(item=>item.password.toLowerCase()===currPass.toLowerCase())
    props.setLogged(true);
  };

  return (
    <div className="bg-[url('/src/bg.jpg')] bg-cover w-full h-screen flex self-center justify-center ">
      <form
        onSubmit={handleLogin}
        className="flex justify-center self-center backdrop-blur-2xl p-8 rounded-3xl"
      >
        <div className="md:w-1/3 max-w-sm">
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              Log In
            </p>
          </div>

          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="User name"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />

          <div className="text-center md:text-left grid place-items-center">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider w-full"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
