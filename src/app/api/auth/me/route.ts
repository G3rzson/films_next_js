import { connectToDB } from "@/db/connectToDB";
import RegisterUserModel from "@/db/registerUserModal";
import { verifyRefreshToken } from "@/Functions/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Cookie-ból olvassuk ki az refresh tokent
  const cookieHeader = req.headers.get("cookie") || "";
  const match = cookieHeader.match(/REFRESH_TOKEN=([^;]+)/);
  const refreshToken = match ? match[1] : null;

  if (!refreshToken) {
    return NextResponse.json(
      { error: "Nincs bejelentkezve!" },
      { status: 401 }
    );
  }

  // Ellenőrizzük a refresh tokent
  const decoded = verifyRefreshToken(refreshToken) as { userId: string } | null;
  if (!decoded) {
    return NextResponse.json(
      { error: "Érvénytelen refresh token" },
      { status: 401 }
    );
  }

  const userId = decoded.userId;

  try {
    await connectToDB();

    const existingUser = await RegisterUserModel.findOne({ _id: userId });

    if (!existingUser) {
      return NextResponse.json(
        { error: "Nincs ilyen felhasználó." },
        { status: 404 }
      );
    }

    return NextResponse.json({ user: existingUser.username }, { status: 200 });
  } catch (error) {
    console.log(error);
    return { error: "Valami hiba történt. Próbáld újra később." };
  }
}
