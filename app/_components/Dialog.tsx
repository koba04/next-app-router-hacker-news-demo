import { ForwardedRef, ReactNode, forwardRef } from "react";

export const Dialog = forwardRef(function Dialog({ children }: { children: ReactNode }, ref: ForwardedRef<HTMLDialogElement>) {
  return <dialog ref={ref} className="w-3/5 h-3/5 backdrop:bg-gray-400 opa backdrop:opacity-50 rounded-md">{children}</dialog>
})