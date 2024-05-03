"use client";
import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ onClick, text, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      aria-label={text + " button"}
    >
      {text}
    </button>
  );
};
