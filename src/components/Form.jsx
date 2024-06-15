import react from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  //the given schema's name must be same as form Nmae
  firstName: yup.string().required("Firstname is required"),
  lastName: yup.string().required("Lastname is required"),
  email: yup
    .string()
    .email("Please enter a valid address")
    .required("Email is required"),
  age: yup
    .number()
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .required("Age is required"),
  password: yup.string().min(6).max(15).required("Password is required"),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Password is required"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-full flex justify-center">
          <div className="bg-blue-400 w-[500px] h-[700px] flex justify-center items-center rounded-lg shadow-2xl">
            <div className="main w-[300px] space-y-10">
              <div className="heading flex justify-center text-3xl font-semibold text-white">
                Sign Up
              </div>

              <form action="" onSubmit={handleSubmit(submitForm)}>
                <div className="form-item my-4">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name ..."
                    className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                    {...register("firstName")}
                  />
                  <p>{errors.firstName?.message}</p>
                </div>
                <div className="form-item my-4">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name..."
                    className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                    {...register("lastName")}
                  />
                  <p>{errors.lastName?.message}</p>
                </div>
                <div className="form-item my-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email..."
                    className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                    {...register("email")}
                  />
                  <p>{errors.email?.message}</p>
                </div>
                <div className="form-item my-4">
                  <label htmlFor="age"></label>
                  <input
                    type="text"
                    name="age"
                    id="age"
                    placeholder="Age..."
                    className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                    {...register("age")}
                  />
                  <p>{errors.age?.message}</p>
                </div>
                <div className="form-item my-4">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password..."
                    className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                    {...register("password")}
                  />
                  <p>{errors.password?.message}</p>
                </div>
                <div className="form-item my-4">
                  <label htmlFor="cpassword"></label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Confirm Password..."
                    className="border-2 w-full placeholder:text-slate-700 font-semibold px-4 h-10 rounded-lg"
                    {...register("cpassword")}
                  />
                  <p>{errors.cpassword && "Passwords should match!!"}</p>
                </div>
                <button
                  type="submit"
                  id="submit"
                  className="submit bg-slate-300 text-black w-full h-11 font-semibold rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Form;
