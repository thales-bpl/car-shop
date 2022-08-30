import { z } from 'zod';
import { VehicleSchema } from './IVehicle';

const carSchema = VehicleSchema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

export type ICar = z.infer<typeof carSchema>;
export { carSchema };
