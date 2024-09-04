import { z } from 'zod';

export const filterOptionsSchema = z.object({
  value: z.string(),
  label: z.string(),
  checked: z.boolean(),
});

export const filterSchema = z.object({
  id: z.string(),
  name: z.string(),
  options: z.array(filterOptionsSchema),
});

export type TFilter = z.infer<typeof filterSchema>;
export type TFilterOption = z.infer<typeof filterOptionsSchema>;
