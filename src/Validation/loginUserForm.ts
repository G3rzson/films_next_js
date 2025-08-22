import z from "zod";

export const loginFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .max(50, { message: "Username max 50 characters." })
    .trim(),

  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters." })
    .max(50, { message: "Password max 50 characters." })
    .trim(),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;
