import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { type, name, id, location, url, tripId, user } = req.body;
  console.log(user);
  switch (type) {
    case "HOTEL":
      const likeHotel = await prisma.hotel.create({
        data: {
          userId: user,
          name,
          hotelId: Number(id),
          location,
          url,
          tripId,
        },
      });
      break;
    case "ATTRACTION":
      const likeAttraction = await prisma.attraction.create({
        data: {
          userId: user,
          name,
          attractionId: Number(id),
          location,
          url,
          tripId,
        },
      });
      break;
    case "RESTAURANT":
      const likeRestaurant = await prisma.restaurant.create({
        data: {
          userId: user,
          name,
          restaurantId: String(id),
          location,
          url,
          tripId,
        },
      });
      break;
    default:
      break;
  }
  const trips = await prisma.trip.findMany({
    where: {
      userId: user,
    },
    include: {
      hotel: true,
      restaurant: true,
      attraction: true,
    },
  });
  return res.status(200).json(trips);
};

export default handler;
