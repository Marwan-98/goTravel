import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, type, user } = req.headers;

  switch (type) {
    case "HOTEL":
      const likedHotel = await prisma.hotel.findFirstOrThrow({
        where: {
          userId: Number(user),
          hotelId: Number(id),
        },
      });
      return likedHotel && res.status(200).json(likedHotel);
    case "ATTRACTION":
      const likedAttraction = await prisma.attraction.findFirstOrThrow({
        where: {
          userId: Number(user),
          attractionId: Number(id),
        },
      });
      return likedAttraction && res.status(200).json(likedAttraction);
    case "RESTAURANT":
      const likedRestaurant = await prisma.restaurant.findFirstOrThrow({
        where: {
          userId: Number(user),
          restaurantId: String(id),
        },
      });
      return likedRestaurant && res.status(200).json(likedRestaurant);

    default:
      break;
  }
};

export default handler;
