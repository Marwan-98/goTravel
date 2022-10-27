import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = req.headers;
  const trips = await prisma.trip.findMany({
    where: {
      userId: Number(user),
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
