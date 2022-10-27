import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../utils/prismaClient";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { values, id, selectedDay } = req.body;
  const newEvent = await prisma.event.create({
    data: {
      content: values.content,
      target: values.target,
      time: values.time,
      dayId: selectedDay,
    },
  });
  const trip = await prisma.trip.findFirst({
    where: {
      id: Number(id),
    },
    select: {
      hotel: true,
      restaurant: true,
      attraction: true,
      days: {
        select: {
          id: true,
          dayNumber: true,
          events: true,
        },
      },
    },
  });
  if (trip) return res.status(200).json(trip);
};

export default handler;
