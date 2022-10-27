import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import queryString from "query-string";
import Layout from "../../components/Layout";
import RoomModal from "../../components/Hotels/RoomModal";
import axios from "axios";
import { useRouter } from "next/router";
import { Hotel, Image, Room } from "../../types/types";
import { useAppSelector } from "../../redux/hooks";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import AddToTripModal from "../../components/Hotels/AddToTripModal";
import { setHotel } from "../../redux/features/hotelsSlice";
import { useDispatch } from "react-redux";

const HotelModal = () => {
  const dispatch = useDispatch();

  const user = useAppSelector((state) => state.user.user);
  const hotel = useAppSelector((state) => state.hotels.hotel);
  const trips = useAppSelector((state) => state.itinerary.trips);
  const router = useRouter();
  const { id, startDate, endDate, adults } = router.query;

  const [openRoomModal, setOpenRoomModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room>();
  const [openImageModal, setOpenImageModal] = useState(false);
  const [modalImages, setModalImages] = useState<Image[]>([]);
  const [imageURL, setImageURL] = useState(0);

  const [addToTripModal, setAddToTripModal] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      axios
        .get(
          "https://hotels-com-provider.p.rapidapi.com/v1/hotels/booking-details",
          {
            headers: {
              "X-RapidAPI-Key":
                "8be7cf2951msheff3a283564814ap167a8fjsnd415b34b76b5",
              "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
            },
            params: {
              adults_number: adults,
              checkin_date: startDate,
              locale: "en_US",
              currency: "USD",
              hotel_id: id,
              checkout_date: endDate,
            },
          }
        )
        .then((res) => dispatch(setHotel(res.data)));
    }
    return () => {
      dispatch(setHotel(null));
    };
  }, [router]);

  useEffect(() => {
    if (router.isReady && user) {
      axios
        .get("/api/checkLiked", {
          headers: {
            id,
            type: "HOTEL",
            user: user.id,
          },
        })
        .then(() => {
          setLiked(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [trips, router]);

  return (
    <Layout>
      {hotel ? (
        <div>
          <div className="z-10">
            <div className="flex min-h-full items-end p-4 text-center sm:items-center sm:p-0">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="flex text-2xl font-medium leading-6 text-gray-900">
                    {hotel.name}{" "}
                    <span
                      className={`${
                        hotel.reviews.brands.rating > 7
                          ? "bg-green-900"
                          : hotel.reviews.brands.rating > 5
                          ? "bg-yellow-400"
                          : "bg-red-600"
                      } text-white px-[4px] rounded text-center mx-2`}
                    >
                      {hotel.reviews.brands.rating}
                    </span>
                    <button
                      className="p-1"
                      onClick={() => setAddToTripModal(true)}
                    >
                      {liked ? (
                        <AiFillHeart className="text-red-500" />
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </button>
                  </div>
                  <h4 className="pt-4">{hotel.address.fullAddress} </h4>
                  <div
                    className={`bg-black bg-opacity-[20%] fixed h-full w-full inset-0 top-0 left-0 flex items-center justify-center ${
                      openImageModal ? "block" : "hidden"
                    }`}
                  >
                    <div className="w-1/2 bg-red-300 relative">
                      <button
                        className="absolute bg-black text-white p-0 rounded-full h-5 w-5 top-5 right-5"
                        onClick={() => {
                          setOpenImageModal(!openImageModal);
                          setModalImages([]);
                          setImageURL(0);
                        }}
                      >
                        X
                      </button>
                      <div
                        className="h-96 w-full bg-center bg-cover"
                        style={{
                          backgroundImage: `url('${modalImages[imageURL]?.fullSizeUrl}')`,
                        }}
                      ></div>
                      <div className="absolute w-full top-1/2 px-3 flex justify-between">
                        <button
                          onClick={() =>
                            imageURL > 0
                              ? setImageURL(imageURL - 1)
                              : setImageURL(modalImages.length - 1)
                          }
                        >
                          back
                        </button>
                        <button
                          onClick={() =>
                            imageURL < modalImages.length - 1
                              ? setImageURL(imageURL + 1)
                              : setImageURL(0)
                          }
                        >
                          next
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h6 className="text-lg font-medium leading-6 text-gray-900 mt-5">
                      Amenities
                    </h6>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {hotel.amenities[0].listItems.map((amenity, idx) => {
                        return (
                          <div className="m-5" key={idx}>
                            <h6 className="font-bold uppercase">
                              {amenity.heading}
                            </h6>
                            {amenity.listItems.map((amenityName, idx) => (
                              <span className="block" key={idx}>
                                {amenityName}
                              </span>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mt-2">
                    <h6 className="text-lg font-medium leading-6 text-gray-900 mt-5">
                      Available Rooms
                    </h6>
                    <>
                      <table className="min-w-full table-fixed divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            ></th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Accommodation Type
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Sleeps
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            ></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {hotel.roomsAndRates.rooms.map((room, idx) => (
                            <tr key={idx}>
                              <td>
                                <div
                                  className="bg-black h-10 w-10 m-5 bg-center bg-cover cursor-pointer"
                                  style={{
                                    backgroundImage: `url('${room.images[0].thumbnailUrl}')`,
                                  }}
                                  onClick={() => {
                                    setModalImages(room.images);
                                    setOpenImageModal(!openImageModal);
                                  }}
                                ></div>
                              </td>
                              <td>{room.name}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {room.maxOccupancy?.total}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {room.ratePlans[0].price.current}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                                <button
                                  className="bg-blue-600 p-2"
                                  onClick={() => {
                                    setSelectedRoom(room);
                                    setOpenRoomModal(true);
                                  }}
                                >
                                  Book
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {openRoomModal && (
            <RoomModal
              setOpenRoomModal={setOpenRoomModal}
              room={selectedRoom}
            />
          )}
          {addToTripModal && (
            <AddToTripModal
              setAddToTripModal={setAddToTripModal}
              id={id}
              type="HOTEL"
              name={hotel.name}
              address={hotel.address.fullAddress}
            />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </Layout>
  );
};

export default HotelModal;
