import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { roomId, message, userId, dateSent } = req.body;

  console.log(roomId);
  // const addMessage = await prisma.message.create({
  //   data: {
  //     tripId: 4,
  //     message,
  //     userId,
  //     dateSent,
  //   },
  // });

  return res.status(200).send("message added");
};

export default handler;
