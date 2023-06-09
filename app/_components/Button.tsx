import { ReactNode } from "react";

export const Button = ({ children, type = "button", onClick }: { children: ReactNode, type?: "button" | "submit", onClick?: () => void }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="border-2 border-violet-500 hover:bg-violet-200 focus:bg-violet-200 text-violet-500 rounded-md px-2 py-1"
    >
      {children}
    </button>
  );
}