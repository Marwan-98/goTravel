import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, tripId } = req.body;
  const updateTrip = await prisma.trip.update({
    where: {
      id: Number(tripId),
    },
    data: {
      user: {
        connect: {
          id,
        },
      },
    },
    select: {
      hotel: true,
      restaurant: true,
      attraction: true,
      days: {
        select: {
          id: true,
          dayNumber: true,
          events: true,
        },
      },
      user: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  });

  return res.status(200).json(updateTrip);
};

export default handler;
