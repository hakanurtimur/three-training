import { z } from "zod";

export const SPlanet = z.object({
  name: z.string(),
  scaledDistance: z.number(),
  scaledRadius: z.number(),
  rotationSpeed: z.number(),
  orbitalAngularSpeed: z.number(),
  initialAngle: z.number(),
  imageUri: z.string(),
});

export type PlanetModel = z.infer<typeof SPlanet>;
