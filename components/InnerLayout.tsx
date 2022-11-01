import { motion } from "framer-motion";
import React from "react";
import { useAppSelector } from "../redux/hooks";
import { LayoutProps } from "../types/types";
import Calendar from "./constants/Calendar/Calendar";

const InnerLayout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full">
      <div className="h-full">
        <div className="grid h-full grid-cols-1 lg:grid-cols-6 gap-5">
          {children}
          <motion.div
            className="h-full p-5 rounded-2xl col-span-2"
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
          >
            <div>
              <div className="flex justify-start items-center">
                <div className="h-12 w-12 rounded-full bg-black px-5"></div>
                <div className="px-5">
                  <span className="text-lg font-bold">John Doe</span>
                  <span className="text-[#73848C] block">
                    Travel Enthusiast
                  </span>
                </div>
              </div>
              <Calendar />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InnerLayout;
