'use client';
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const SubmitButton = ({ label, pendingLabel }: { label: string, pendingLabel: string }) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="bg-violet-500 hover:bg-violet-400 text-white rounded-md p-2">{pending ? pendingLabel : label}</button>
  );
}