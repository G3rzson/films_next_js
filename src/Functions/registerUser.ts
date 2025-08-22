"use server";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import {
  RegisterFormData,
  registerFormSchema,
} from "@/Validation/registerUserForm";
import { connectToDB } from "@/db/connectToDB";
import RegisterUserModel from "@/db/registerUserModal";

export async function registerUser(data: RegisterFormData) {
  const parsed = registerFormSchema.safeParse(data);

  if (!parsed.success) {
    return { error: "Hibás adat." };
  }

  const { username, email, password } = parsed.data;

  try {
    await connectToDB();

    const existingUser = await RegisterUserModel.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return { error: "Felhsználónév vagy email már létezik." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await RegisterUserModel.create({
      username,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    console.error("Hiba a regisztráció során:", error);
    return { error: "Valami hiba történt. Próbáld újra később." };
  }

  redirect("/user/login");
}
