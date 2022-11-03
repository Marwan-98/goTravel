import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import axios from "axios";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import handleGetImage from "../components/constants/API/handleGetImage";
import InnerLayout from "../components/InnerLayout";
import Layout from "../components/Layout";
import { setUser } from "../redux/features/userSlice";
import { useAppSelector } from "../redux/hooks";

type Props = {};

const Settings = (props: Props) => {
  const dispatch = useDispatch();

  const user = useAppSelector((state) => state.user.user);
  const [userPhoto, setUserPhoto] = useState<File | null>(null);

  const supabase = useSupabaseClient();
  const session = useSession();

  const formik = useFormik({
    initialValues: {
      tagline: "",
    },
    onSubmit: async (values) => {
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(`public/${userPhoto!.name}`, userPhoto!, {
          cacheControl: "3600",
          upsert: false,
        });

      if (data) {
        axios
          .patch("/api/updateImage", {
            email: user?.email,
            image: data.path,
          })
          .then((res) => dispatch(setUser(res.data)));
      } else if (error) {
        console.log(error);
      }
    },
  });

  return (
    <Layout>
      <InnerLayout>
        <motion.div
          className="bg-[#F5FAF8] h-full p-10 rounded-2xl col-span-4"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
        >
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-6 flex flex-col lg:flex-row items-center">
              <div className="flex-grow space-y-6">
                <div>
                  <label
                    htmlFor="tagline"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tagline
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="tagline"
                      id="tagline"
                      autoComplete="tagline"
                      className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                      value={formik.values.tagline}
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
                <p
                  className="text-sm font-medium text-gray-700"
                  aria-hidden="true"
                >
                  Photo
                </p>
                <div className="mt-1 lg:hidden">
                  <div className="flex items-center">
                    <div
                      className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                      aria-hidden="true"
                    >
                      <img
                        className="h-full w-full rounded-full"
                        src={`./${handleGetImage(user?.image)}`}
                        alt=""
                      />
                    </div>
                    <div className="ml-5 rounded-md shadow-sm">
                      <div className="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                        <label
                          htmlFor="mobile-user-photo"
                          className="pointer-events-none relative text-sm font-medium leading-4 text-gray-700"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                        </label>
                        <input
                          id="mobile-user-photo"
                          name="user-photo"
                          type="file"
                          className="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                          onChange={(e) => setUserPhoto(e.target.files![0])}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative hidden overflow-hidden rounded-full lg:block">
                  <img
                    className="relative h-40 w-40 rounded-full"
                    src={`${handleGetImage(user?.image)}`}
                    alt=""
                  />
                  <label
                    htmlFor="desktop-user-photo"
                    className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                  >
                    <span>Change</span>
                    <span className="sr-only"> user photo</span>
                    <input
                      type="file"
                      id="desktop-user-photo"
                      name="user-photo"
                      className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                      onChange={(e) => setUserPhoto(e.target.files![0])}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center py-4 px-4 sm:px-6">
              <button
                type="submit"
                className="ml-5 inline-flex justify-center w-full rounded-md border border-transparent bg-[#1ec28b] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#1ec28b]/80 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </form>
        </motion.div>
      </InnerLayout>
    </Layout>
  );
};

export default Settings;
