import { z } from 'zod';
import { VehicleSchema } from './IVehicle';

const motorcycleSchema = VehicleSchema.extend({
  category: z.enum(['Custom', 'Street', 'Trail']),
  engineCapacity: z.number().min(1).max(2500),
});

export type IMotorcycle = z.infer<typeof motorcycleSchema>;
export { motorcycleSchema };
