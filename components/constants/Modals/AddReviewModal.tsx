import axios from "axios";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useAppSelector } from "../../../redux/hooks";
import { Review } from "../../../types/Review";

const AddReviewModal = ({
  setShowWriteReviewModal,
  websiteReviews,
  setWebsiteReviews,
}: {
  setShowWriteReviewModal: (value: SetStateAction<boolean>) => void;
  websiteReviews: Review[];
  setWebsiteReviews: Dispatch<SetStateAction<Review[]>>;
}) => {
  const user = useAppSelector((state) => state.user.user);
  const [count, setCount] = useState(1);
  const [titleInput, setTitleInput] = useState("");
  const [detailsInput, setDetailsInput] = useState("");

  const router = useRouter();

  const { id } = router.query;

  const addReview = () => {
    if (router.query) {
      axios
        .post("/api/addReview", {
          locationId: id,
          title: titleInput,
          rating: count + 1,
          text: detailsInput,
          datePublished: new Date(),
          user: user!.id,
        })
        .then((res) => setWebsiteReviews([...websiteReviews, res.data]));
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center h-full w-full bg-black bg-opacity-25">
      <div className="w-1/2 relative bg-white text-center p-5">
        <h3 className="uppercase font-bold">Write a Review</h3>
        <div className="block">
          <div className="flex justify-center text-4xl mt-5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <span
                className={`${
                  count < idx
                    ? "text-gray-600"
                    : "bg-clip-text text-transparent bg-green-200"
                } cursor-pointer`}
                onMouseOver={() => setCount(idx)}
                key={idx}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 flex flex-col h-full">
          <div className="text-right">
            <input
              className="h-8 w-full border border-grey-300 rounded-2xl p-2 mt-2"
              placeholder="Title..."
              required
              onChange={(e) => setTitleInput(e.target.value)}
            />
            <textarea
              className="grow w-full border border-grey-300 rounded-2xl p-2 mt-2"
              placeholder="Details..."
              required
              onChange={(e) => setDetailsInput(e.target.value)}
            />
            <button
              className="bg-[#1ec28b] p-3 rounded-2xl text-white uppercase"
              onClick={() => addReview()}
            >
              Add Review
            </button>
          </div>
        </div>
        <div className="absolute p-1 rounded-full bg-black top-5 right-5 h-10 w-10 text-white text-center text-xl">
          <button
            className="rounded-full h-full w-full border border-2 border-white"
            onClick={() => setShowWriteReviewModal(false)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReviewModal;
