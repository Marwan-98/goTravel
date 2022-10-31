import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { values, duration, user } = req.body;

  const newTrip = await prisma.trip.create({
    data: {
      name: values.name,
      user: {
        connect: {
          id: Number(values.user),
        },
      },
    },
  });

  for (let i = 0; i < duration; i++) {
    const newDay = await prisma.day.create({
      data: {
        dayNumber: `day ${i + 1}`,
        tripId: newTrip.id,
      },
    });
    if (i === 0) {
      await prisma.event.create({
        data: {
          content: "Arrival at",
          target: values.airport,
          time: values.time,
          dayId: newDay.id,
        },
      });
    }
  }

  const allTrips = await prisma.trip.findMany({
    where: {
      user: {
        some: {
          id: Number(values.user),
        },
      },
    },
  });

  return res.status(200).json(allTrips);
};

export default handler;
