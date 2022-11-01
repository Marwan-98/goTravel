import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { HiEllipsisVertical, HiOutlineCalendarDays } from "react-icons/hi2";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  getDayOfYear,
  isBefore,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { useAppSelector } from "../../../redux/hooks";
import { setEndDate, setStartDate } from "../../../redux/features/userSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    start: "1:00 PM",
    startDatetime: "2022-01-21T13:00",
    end: "2:30 PM",
    endDatetime: "2022-01-21T14:30",
  },
  // More meetings...
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default function Calendar() {
  const dispatch = useDispatch();
  let today = startOfToday();
  const trips = useAppSelector((state) => state.itinerary.trips);
  const startDate = useAppSelector((state) => state.user.startDate);
  const endDate = useAppSelector((state) => state.user.endDate);
  const [clickCount, setClickCount] = useState(0);

  const [currentMonth, setCurrentMonth] = useState(format(today, "MMMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMMM-yyyy"));
  };

  const prevMonth = () => {
    const firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPrevMonth, "MMMM-yyyy"));
  };

  const selectDate = (day: Date) => {
    if (clickCount < 1) {
      dispatch(setStartDate(format(day, "yyyy-MM-dd")));
      setClickCount(clickCount + 1);
    } else {
      if (isBefore(day, parse(startDate, "yyyy-MM-dd", new Date()))) {
        dispatch(setStartDate(format(day, "yyyy-MM-dd")));
      } else {
        dispatch(setEndDate(format(day, "yyyy-MM-dd")));
        setClickCount(0);
      }
    }
  };
  return (
    <div className="mt-10">
      <div className="flex items-center">
        <h2 className="flex-auto font-semibold text-[#73848C] text-xl">
          <span className="font-bold text-[#2B2945]">
            {format(firstDayCurrentMonth, "MMMM")}
          </span>{" "}
          {format(today, "yyyy")}
        </h2>
        <button
          type="button"
          className="-my-1.5 flex flex-none border rounded-2xl p-3 items-center justify-center p-1.5 text-gray-400 hover:text-[#2B2945]"
          onClick={prevMonth}
        >
          <span className="sr-only">Previous month</span>
          <BsChevronLeft className="h-3 w-3" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none border rounded-2xl p-3 items-center justify-center p-1.5 text-gray-400 hover:text-[#2B2945]"
          onClick={nextMonth}
        >
          <span className="sr-only">Next month</span>
          <BsChevronRight className="h-3 w-3" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-[#2B2945] font-bold">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <motion.div
        className="mt-2 grid grid-cols-7 text-sm"
        key={currentMonth}
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
      >
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              "py-2 relative"
            )}
          >
            <button
              type="button"
              onClick={() => selectDate(day)}
              className={classNames(
                isEqual(day, parse(startDate, "yyyy-MM-dd", new Date())) &&
                  "text-white",
                !isEqual(day, parse(startDate, "yyyy-MM-dd", new Date())) &&
                  !isEqual(day, parse(endDate, "yyyy-MM-dd", new Date())) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-400",
                isEqual(day, parse(startDate, "yyyy-MM-dd", new Date())) &&
                  "bg-[#1EC28B] text-white",
                isEqual(day, parse(endDate, "yyyy-MM-dd", new Date())) &&
                  "bg-[#1EC28B] text-white",
                getDayOfYear(day) <
                  getDayOfYear(parse(endDate, "yyyy-MM-dd", new Date())) &&
                  getDayOfYear(day) >
                    getDayOfYear(parse(startDate, "yyyy-MM-dd", new Date())) &&
                  "before:h-8 before:w-[200%] before:absolute before:-z-10 before:bg-[#F6FEFB] text-[#1EC28B]",
                !isEqual(day, parse(startDate, "yyyy-MM-dd", new Date())) &&
                  "hover:bg-gray-200",
                (isEqual(day, parse(startDate, "yyyy-MM-dd", new Date())) ||
                  isToday(day)) &&
                  "font-semibold",
                "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
          </div>
        ))}
      </motion.div>
      <section className="mt-12">
        <h2 className="text-[#2B2945] text-xl font-bold">My Trips</h2>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-[#2B2945]">
          {trips.map((trip, idx) => {
            if (idx < 2) {
              return (
                <Link href={`/itinerary/${trip.id}`} key={trip.id}>
                  <li className="group relative cursor-pointer flex items-center border rounded-2xl space-x-4 rounded-xl py-2 px-4 focus-within:bg-gray-100 hover:bg-gray-100">
                    <img
                      src={"./trip.jpg"}
                      alt=""
                      className="h-20 w-20 flex-none rounded-2xl"
                    />
                    <div className="flex-auto">
                      <p className="text-[#2B2945] text-base font-bold">
                        {trip.name}
                      </p>
                      {/* <p className="mt-0.5 text-[#73848C]">
                  <HiOutlineCalendarDays className="inline mr-2" />
                  <time dateTime={trip.startDatetime}>26 Jun</time> -{" "}
                  <time dateTime={trip.endDatetime}>30 Jun</time>
                </p> */}
                      <div className="flex items-center">
                        <div className="isolate flex -space-x-1 overflow-hidden">
                          <img
                            className="relative z-30 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <img
                            className="relative z-20 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                          <img
                            className="relative z-10 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                            alt=""
                          />
                          <img
                            className="relative z-0 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <span className="font-bold text-[#1EC28B]">+3</span>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            }
          })}
        </ol>
      </section>
    </div>
  );
}
