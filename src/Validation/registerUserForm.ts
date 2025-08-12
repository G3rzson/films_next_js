import z from "zod";

export const registerFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required." })
    .max(50, { message: "Username max 50 characters." })
    .trim(),

  email: z
    .string()
    .nonempty({ message: "Email is required." })
    .email({ message: "Invalid email." })
    .trim(),

  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters." })
    .max(50, { message: "Password max 50 characters." })
    .trim(),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;
