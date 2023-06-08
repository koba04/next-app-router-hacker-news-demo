import { ReactNode } from "react";

export const Main = ({ children }: { children: ReactNode }) => (
  <main className="p-8">{children}</main>
)