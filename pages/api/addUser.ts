import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { values } = req.body;
  try {
    const newUser = await prisma.travelUser.create({
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        country: values.country.split(",")[0],
        currency: values.country.split(",")[1],
      },
    });
    prisma.$disconnect;
    return res.status(200).json(newUser);
  } catch {
    return res.status(500).send("Please Try Again Later");
  }
}
