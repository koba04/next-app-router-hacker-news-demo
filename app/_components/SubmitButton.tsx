'use client';
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Button } from "./Button";

export const SubmitButton = ({ label, pendingLabel }: { label: string, pendingLabel: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit">{pending ? pendingLabel : label}</Button>
  );
}