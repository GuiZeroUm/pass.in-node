import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/get-event.ts
import z from "zod";
async function getEvent(app) {
  app.withTypeProvider().get("/events/:eventId", {
    schema: {
      params: z.object({
        eventId: z.string().uuid()
      }),
      response: {
        200: {
          event: z.object({
            id: z.string().uuid(),
            title: z.string(),
            slug: z.string(),
            details: z.string().nullable(),
            maximumAttendees: z.number().int().nullable(),
            AttendeesAmount: z.number().int()
          })
        }
      }
    }
  }, async (request, reply) => {
    const { eventId } = request.params;
    const event = await prisma.event.findUnique({
      select: {
        id: true,
        title: true,
        slug: true,
        details: true,
        maximumAttendees: true,
        _count: {
          select: {
            Attendee: true
          }
        }
      },
      where: {
        id: eventId
      }
    });
    if (event === null) {
      throw new Error("O evento n\xE3o foi encontrado.");
    }
    return reply.send({
      event: {
        id: event.id,
        title: event.title,
        slug: event.slug,
        details: event.details,
        maximumAttendees: event.maximumAttendees,
        AttendeesAmount: event._count.Attendee
      }
    });
  });
}

export {
  getEvent
};
