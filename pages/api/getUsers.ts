import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.headers;
  const findUsers = await prisma.travelUser.findMany({
    where: {
      email: {
        contains: String(email),
      },
    },
  });
  return res.status(200).json(findUsers);
};

export default handler;
