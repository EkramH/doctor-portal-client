import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../shared/Loading";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  //Warning: update a component (`BrowserRouter`) while rendering a different component ('login)
  //Solved with useEffect..
  useEffect(() => {
    if (user || userG) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user, userG]);

  if (error || errorG) {
    toast.error(`ERROR : ${error}`, {
      toastId: "error1",
    });
  }

  if (loading || loadingG) {
    return <Loading />;
  }

  return (
    <div className="mt-10 flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required!",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide valid email!",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required!",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be six character or longer!",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn btn-outline font-bold btn-secondary mt-6 w-full max-w-xs"
              type="submit"
              value="Login"
            />
            <p className="mt-5 text-center">
              New to Doctor Portal?{" "}
              <Link
                className="text-secondary underline decoration-solid"
                to="/signup"
              >
                Create an account.
              </Link>
            </p>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline font-bold"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
