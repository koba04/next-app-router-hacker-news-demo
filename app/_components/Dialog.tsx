import { ForwardedRef, ReactNode, forwardRef } from "react";

export const Dialog = forwardRef(function Dialog({ title, children }: { title: string, children: ReactNode }, ref: ForwardedRef<HTMLDialogElement>) {
  return (
    <dialog ref={ref} className="w-3/5 h-3/5 p-8 backdrop:bg-gray-400 opa backdrop:opacity-50 rounded-md">
      <h2 className="text-2xl">{title}</h2>
      <div className="flex flex-col gap-2 py-4 w-3/5">
        {children}
      </div>
    </dialog>
  );
})

export const DialogButtonWrapper = ({ children }: { children: ReactNode }) => (
  <div className="text-right py-2">
    {children}
  </div>
)