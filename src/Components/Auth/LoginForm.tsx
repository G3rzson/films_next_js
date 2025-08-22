"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Btn from "./Elements/Btn";
import { LoginFormData, loginFormSchema } from "@/Validation/loginUserForm";
import { loginUser } from "@/Functions/loginUser";
import InputField from "./Elements/InputField";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/Hooks/UseGlobalContext";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });
  const router = useRouter();
  const { setAccessToken } = useGlobalContext();

  async function onSubmit(data: LoginFormData) {
    const result = await loginUser(data);

    if (result.error) {
      setError("username", {
        type: "server",
        message: result.error,
      });
    }

    if (result.ACCESS_TOKEN) {
      setAccessToken(result.ACCESS_TOKEN);
      router.push("/");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputField<LoginFormData>
        name="username"
        label="Felhasználónév"
        register={register}
        errors={errors}
      />
      <InputField<LoginFormData>
        name="password"
        label="Jelszó"
        type="password"
        register={register}
        errors={errors}
      />
      <Btn isSubmitting={isSubmitting}>Bejelentkezés</Btn>
    </form>
  );
}
