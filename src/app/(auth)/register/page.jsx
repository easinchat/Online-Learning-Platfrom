"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    console.log("data", data);

    const { name, email, password, photo } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Sign up successfully");
    }
  };

  return (
    <div className="container flex  justify-center  my-auto">
      <form onSubmit={handleSubmit(handleRegister)}>
        <legend className="fieldset-legend text-center">Register</legend>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {/* Name */}

          <label className="label">Name</label>
          <input
            type="text"
            className="input text-white"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input text-white"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />

          {/* Photo Url */}
          <label className="label">Photo Url</label>
          <input
            type="text"
            className="input text-white"
            placeholder="Photo Url"
            {...register("photo", { required: "Photo-Url is required" })}
          />

          {/* password */}
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
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
