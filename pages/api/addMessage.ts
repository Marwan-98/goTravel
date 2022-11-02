import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { roomId, message, userId, dateSent } = req.body;

  const addMessage = await prisma.message.create({
    data: {
      tripId: roomId,
      message,
      userId,
      dateSent,
    },
  });

  return res.status(200).send("message added");
};

export default handler;
