import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-full flex justify-center">
          <div className="bg-blue-400 w-[500px] h-[700px] flex justify-center items-center rounded-lg shadow-2xl">
            <div className="form w-[300px] space-y-10">
              <div className="heading flex justify-center text-3xl font-semibold text-white">
                Sign Up
              </div>
              <div className="form-item">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name ..."
                  className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name..."
                  className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                />
              </div>
              <div className="form-item">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email..."
                  className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                />
              </div>
              <div className="form-item">
                <label htmlFor="age"></label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Age..."
                  className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                />
              </div>
              <div className="form-item">
                <label htmlFor="password"></label>
                <input
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Password..."
                  className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                />
              </div>
              <div className="form-item">
                <label htmlFor="cpassword"></label>
                <input
                  type="text"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm Password..."
                  className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                />
              </div>
              <button
                type="submit"
                id="submit"
                className="submit bg-slate-300 text-black w-full h-11 font-semibold rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
