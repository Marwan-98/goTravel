import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { locationId, rating, title, text, datePublished, user } = req.body;

  const addReview = await prisma.review.create({
    data: {
      title,
      text,
      rating,
      datePublished,
      locationId,
      userId: Number(user),
    },
    select: {
      id: true,
      rating: true,
      title: true,
      text: true,
      datePublished: true,
      user: true,
    },
  });

  if (addReview) return res.status(200).json(addReview);
};

export default handler;
