"use client";

import { registerUser } from "@/Functions/registerUser";
import {
  RegisterFormData,
  registerFormSchema,
} from "@/Validation/registerUserForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  async function onSubmit(data: RegisterFormData) {
    const result = await registerUser(data);
    if (result.error === "Hibás adat.") {
      setError("username", {
        type: "server",
        message: "Hibás adat.",
      });
      setError("email", {
        type: "server",
        message: "Hibás adat.",
      });
      setError("password", {
        type: "server",
        message: "Hibás adat.",
      });
    } else if (result.error === "User already exist.") {
      setError("username", {
        type: "server",
        message: "User already exist.",
      });
    } else if (result.error === "Valami hiba történt. Próbáld újra később.") {
      setError("username", {
        type: "server",
        message: "Valami hiba történt. Próbáld újra később.",
      });
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="formField">
        <label htmlFor="username">Username:</label>
        <input
          {...register("username")}
          className="formInput"
          type="text"
          name="username"
          id="username"
        />
        {errors.username && (
          <span className="errorMsg">{errors.username.message}</span>
        )}
      </div>
      <div className="formField">
        <label htmlFor="email">Email:</label>
        <input
          {...register("email")}
          className="formInput"
          type="email"
          name="email"
          id="email"
        />
        {errors.email && (
          <span className="errorMsg">{errors.email.message}</span>
        )}
      </div>
      <div className="formField">
        <label htmlFor="password">Password:</label>
        <input
          {...register("password")}
          className="formInput"
          type="password"
          name="password"
          id="password"
        />
        {errors.password && (
          <span className="errorMsg">{errors.password.message}</span>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-green-600 hover:bg-green-500 text-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400 p-2 cursor-pointer w-full rounded mt-3"
      >
        Registration
      </button>
    </form>
  );
}
