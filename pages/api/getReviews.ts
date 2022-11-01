import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { locationid } = req.headers;

  const reviews = await prisma.review.findMany({
    where: {
      locationId: String(locationid),
    },
    select: {
      title: true,
      text: true,
      rating: true,
      datePublished: true,
      user: true,
    },
  });

  console.log(`locationId: ${locationid}`);

  if (reviews) return res.status(200).json(reviews);
};

export default handler;
