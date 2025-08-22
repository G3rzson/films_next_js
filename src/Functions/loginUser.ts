"use server";

import { LoginFormData, loginFormSchema } from "@/Validation/loginUserForm";
import { connectToDB } from "@/db/connectToDB";
import RegisterUserModel from "@/db/registerUserModal";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { signAccessToken, signRefreshToken } from "./auth";

export async function loginUser(data: LoginFormData) {
  const parsed = loginFormSchema.safeParse(data);

  if (!parsed.success) {
    return { error: "Hibás adat." };
  }

  const { username, password } = parsed.data;

  try {
    await connectToDB();

    const existingUser = await RegisterUserModel.findOne({ username });

    if (!existingUser) {
      return { error: "Hibás felhasználónév vagy jelszó." };
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
      return { error: "Hibás felhasználónév vagy jelszó." };
    }

    const accessToken = signAccessToken(existingUser._id.toString());
    const refreshToken = signRefreshToken(existingUser._id.toString());

    // Cookie beállítás (httpOnly, biztonságos mód)
    const cookieStore = await cookies();
    cookieStore.set("REFRESH_TOKEN", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      //maxAge: 60 * 60 * 24 * 7, // 7 nap
      maxAge: 60 * 60, // 1óra
    });

    return { ACCESS_TOKEN: accessToken };
  } catch (error) {
    console.log(error);
    return { error: "Valami hiba történt. Próbáld újra később." };
  }
}
