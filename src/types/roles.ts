import { z } from 'zod';

export const roleSchema = z.object({
  id: z.string(),
  roleName: z.string(),
  name: z.string(),
  label: z.string(),
  checked: z.boolean(),
});

export const rolesSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  roles: z.array(roleSchema),
});

export type TRole = z.infer<typeof roleSchema>;
export type TRolePayload = z.infer<typeof rolesSchema>;
export type TRoles = Record<string, TRole[]>;
