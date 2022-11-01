import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";

import { useFormik } from "formik";
import { countries } from "../components/constants/countries/countries";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const SignUp = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      country: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
        });
        if (error) throw error;
        if (data)
          axios.put("/api/addUser", { values }).then((res) => router.push("/"));
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-7 w-auto"
                src="./logo-3.png"
                alt="Your Company"
              />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Sign up to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Already Have an Account?{" "}
                <Link href="/signIn">
                  <span className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                    Sign In
                  </span>
                </Link>
              </p>
            </div>

            <div className="mt-8">
              {/* <div>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    sign up with
                  </p>

                  <div className="mt-1 grid grid-cols-3 gap-3">
                    <div>
                      <button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                        <span className="sr-only">sign up with Facebook</span>
                        <AiFillFacebook className="h-6 w-6" />
                      </button>
                    </div>

                    <div>
                      <button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                        <span className="sr-only">sign up with Twitter</span>
                        <AiOutlineTwitter className="h-6 w-6" />
                      </button>
                    </div>

                    <div>
                      <button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                        <span className="sr-only">sign up with Google</span>
                        <AiOutlineGoogle className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative mt-6">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div> */}

              <div className="mt-6">
                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={formik.handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="firstName"
                        name="firstName"
                        type="name"
                        autoComplete="name"
                        required
                        onChange={formik.handleChange}
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="lastName"
                        name="lastName"
                        type="name"
                        autoComplete="name"
                        onChange={formik.handleChange}
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <div className="mt-1">
                      <select
                        id="country"
                        name="country"
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        onChange={formik.handleChange}
                        required
                      >
                        {countries.map((country, idx) => (
                          <option
                            key={idx}
                            value={`${country.countryName}, ${country.currencyCode}`}
                          >
                            {country.countryName} ({country.currencyCode})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={formik.handleChange}
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  {/* 
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <button className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </button>
                    </div>
                  </div> */}

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="./signup.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
