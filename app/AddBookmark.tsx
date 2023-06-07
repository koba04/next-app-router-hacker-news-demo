'use client';

import { useRef } from "react";
import { SubmitButton } from "./_components/SubmitButton";

export const AddBookmark = ({ title, url, addBookmark } : { title: string, url: string, addBookmark: (formData: FormData) => Promise<void> }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
    <button
      className="bg-slate-200 hover:bg-slate-300 rounded-md p-1"
      onClick={() => dialogRef.current?.showModal()}
    >
      Add Bookark
    </button>
      <dialog ref={dialogRef}>
        <h2>Add Bookmark</h2>
        <form action={addBookmark}>
          <input type="text" name="comment" />
          <input type="hidden" name="url" value={url} />
          <input type="hidden" name="title" value={title} />
          <SubmitButton label="Add" pendingLabel="Sending..." />
        </form>
      </dialog>
    </>
  )
}