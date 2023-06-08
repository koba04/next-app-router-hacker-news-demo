import { ReactNode } from "react"

export const HeaderTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-5xl text-center py-4">{children}</h1>
}