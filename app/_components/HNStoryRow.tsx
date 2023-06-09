import { ReactNode } from "react";

export const HNStoryRow = ({ rank, title, action } : { rank: number, title: ReactNode, action?: ReactNode }) => (
  <div className="flex w-4/5">
  <span className="grow-0 shrink-0 w-12 text-xl self-center text-center">{rank}</span>
  <div className="flex-grow text-lg">
    {title}
  </div>
  {action ? <div className="inline-block text-sm px-4 self-center">{action}</div> : null}
</div>
)