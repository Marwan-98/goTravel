import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  MdOutlineExplore,
  MdOutlineFlight,
  MdOutlineBed,
  MdOutlineFoodBank,
  MdOutlineMap,
  MdOutlineMenu,
  MdClose,
} from "react-icons/md";

import { GoSignOut } from "react-icons/go";

import { LayoutProps, Props } from "../types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import axios from "axios";
import { setUser } from "../redux/features/userSlice";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { auth } from "../utils/authentication";
import { setTrips } from "../redux/features/ItinerarySlice";
import { AiOutlineTool } from "react-icons/ai";
import InnerLayout from "./InnerLayout";
import { useSockets } from "../context/socket.context";
import EVENTS from "../config/events";
import { useUser } from "../context/AuthContext";

const navigation = [
  { name: "Explore", href: "/", icon: MdOutlineExplore },
  { name: "Flights", href: "/Flights", icon: MdOutlineFlight },
  { name: "Lodges", href: "/Lodges", icon: MdOutlineBed },
  { name: "Eat out", href: "/EatOut", icon: MdOutlineFoodBank },
  { name: "Itineraries", href: "/Itineraries", icon: MdOutlineMap },
  { name: "Utilities", href: "/Utilities", icon: AiOutlineTool },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Layout = ({ children }: LayoutProps) => {
  const { user } = useUser();
  const { socket, roomId, rooms } = useSockets();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const appUser = useAppSelector((state) => state.user.user);
  const trips = useAppSelector((state) => state.itinerary.trips);
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      dispatch(setUser(null));
      router.push("/signIn");
    } else if (user && !appUser) {
      axios
        .get("/api/getUser", {
          headers: {
            email: user!.email,
          },
        })
        .then((res) => {
          dispatch(setUser(res.data));
        });
    }
  }, []);

  useEffect(() => {
    appUser &&
      axios
        .get("/api/getTrips", {
          headers: {
            user: appUser.id,
          },
        })
        .then((res) => {
          dispatch(setTrips(res.data));
        })
        .then(() => {
          trips.map((trip) => {
            const roomName = trip.name;
            const roomId = trip.id;
            socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName, roomId });
          });
        });
  }, [appUser]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return error;
    router.push("/signIn");
    dispatch(setUser(null));
  };

  return (
    appUser && (
      <div className="w-screen">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <MdClose
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex justify-center items-center p-2">
                      <img
                        className="h-8 w-auto"
                        src="../logo-3.png"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.href === router.pathname
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex justify-center items-center p-2">
                <img
                  className="h-8 w-auto"
                  src="../logo-3.png"
                  alt="Your Company"
                />
              </div>
              <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={classNames(
                        item.href === router.pathname
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.href === router.pathname
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
                <button
                  className={classNames(
                    "text-gray-600 hover:bg-gray-50 hover:text-gray-900 w-full",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                  onClick={() => signOut()}
                >
                  <GoSignOut
                    className={classNames(
                      "text-gray-400 group-hover:text-gray-500",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64 w-full">
          <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MdOutlineMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex h-screen w-full relative text-[#2B2945] overflow-x-hidden">
            <div className="py-6 h-full w-full relative">{children}</div>
          </main>
        </div>
      </div>
    )
  );
};

export default Layout;
