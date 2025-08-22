import React from "react";

type Props = {
  children: React.ReactNode;
  isSubmitting: boolean;
};

export default function Btn({ children, isSubmitting }: Props) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="bg-green-600 hover:bg-green-500 text-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-400 p-2 cursor-pointer w-full rounded mt-3"
    >
      {children}
    </button>
  );
}
