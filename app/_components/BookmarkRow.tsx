import { ReactNode } from "react";

export const BookmarkRow = ({ link, action, comment } : { link: ReactNode, action: ReactNode, comment: string }) => (
  <div className="p-2 text-xl border-violet-200 border-2 w-4/5 hover:shadow-md">
    <div className="flex">
      <div className="flex-grow">{link}</div>
      <div className="inline-block text-sm px-2">{action}</div>
    </div>
    <p className="text-lg">{`"${comment}"`}</p>
  </div>
)