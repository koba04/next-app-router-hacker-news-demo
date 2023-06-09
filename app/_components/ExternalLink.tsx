import { ReactNode } from "react";

export const ExternalLink = ({ href, children }: { href: string, children: ReactNode }) => (
  <a href={href} target="_blank" className="underline text-violet-500 hover:text-violet-400">
  {children}
</a>
)
