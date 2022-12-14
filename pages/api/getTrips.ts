import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { user } = req.headers;
  const trips = await prisma.trip.findMany({
    where: {
      user: {
        some: {
          id: Number(user),
        },
      },
    },
  });
  return res.status(200).json(trips);
};

export default handler;
