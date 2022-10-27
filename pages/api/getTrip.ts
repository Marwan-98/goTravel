import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.headers;
  const trip = await prisma.trip.findUnique({
    where: {
      id: Number(id),
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
    },
  });
  return res.status(200).json(trip);
};

export default handler;
