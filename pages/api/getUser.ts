import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.headers;
  const findUser = await prisma.travelUser.findUnique({
    where: {
      email: String(email),
    },
  });
  return res.status(200).json(findUser);
};

export default handler;
