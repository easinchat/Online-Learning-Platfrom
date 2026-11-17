"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogIn = async (data) => {
    console.log("data", data);

    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      console.log("LOGIN ERROR:", error);
      alert(error.message);
    }
    if (res) {
      alert("Sign in successfully");
    }
  };

  return (
    <div className="container flex  justify-center  my-auto">
      <form onSubmit={handleSubmit(handleLogIn)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            type="email"
            className="input text-white"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-400">{errors.email.message}</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            className="input text-white"
            placeholder="Password"
            {...register("password", { required: "password is required" })}
          />
          {errors.password && (
            <p className="text-red-400">{errors.password.message}</p>
          )}

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;
