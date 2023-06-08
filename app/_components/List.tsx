import { ReactNode } from "react"

export const List = ({ children } : { children: ReactNode }) => (
  <ul className="flex flex-col gap-4">{children}</ul>
)

export const ListItem = ({ children }: { children: ReactNode }) => (
  <li className="flex justify-center">{children}</li>
)
