"use client";
import { useGlobalContext } from "@/Hooks/UseGlobalContext";
import UserLink from "./UserLink";

export default function Userinfo() {
  const { user } = useGlobalContext();
  return (
    <>
      {user ? (
        <div className="flex flex-row flex-wrap gap-8 items-center justify-center mt-16 sm:mt-40">
          <UserLink
            path="/user/logout"
            linkTitle="Kijelentkezés"
            cardText={user}
          />
        </div>
      ) : (
        <div className="flex flex-row flex-wrap gap-8 items-center justify-center mt-16 sm:mt-40">
          <UserLink
            path="/user/login"
            linkTitle="Bejelentkezés"
            cardText="Van már fiókod?"
          />

          <UserLink
            path="/user/register"
            linkTitle="Regisztráció"
            cardText="Még nincs fiókod?"
          />
        </div>
      )}
    </>
  );
}
