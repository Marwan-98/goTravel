import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, image } = req.body;
  const updateImage = await prisma.travelUser.update({
    where: {
      email: String(email),
    },
    data: {
      image,
    },
  });
  return res.status(200).json(updateImage);
};

export default handler;
