import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { tripid } = req.headers;

  const messages = await prisma.message.findMany({
    where: {
      tripId: Number(tripid),
    },
    select: {
      message: true,
      dateSent: true,
      user: true,
    },
  });

  if (messages) return res.status(200).json(messages);
};

export default handler;
