'use client';

import { useRef } from "react";
import { SubmitButton } from "./_components/SubmitButton";
import { Button } from "./_components/Button";
import { Dialog } from "./_components/Dialog";

export const AddBookmark = ({ title, url, addBookmark } : { title: string, url: string, addBookmark: (formData: FormData) => Promise<void> }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        onClick={() => dialogRef.current?.showModal()}
      >
        Save
      </Button>
      <Dialog ref={dialogRef}>
        <h2 className="text-2xl">Save to Bookmark</h2>
        <p className="text-lg underline text-violet-500 hover:text-violet-400 py-4"><a href={url} target="_blank">{title}</a></p>
        <form action={addBookmark} className="flex flex-col gap-2 py-4 w-3/5">
          <label className="flex flex-col gap-2">
            <span className="text-lg">Comment</span>
            <input type="text" name="comment" autoFocus className="border-2 border-gray-200 w-full p-1" />
          </label>
          <input type="hidden" name="url" value={url} />
          <input type="hidden" name="title" value={title} />
          <div className="text-right">
            <SubmitButton label="Add" pendingLabel="Sending..." />
          </div>
        </form>
      </Dialog>
    </>
  )
}