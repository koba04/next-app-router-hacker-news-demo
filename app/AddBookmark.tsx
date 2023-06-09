'use client';

import { useRef } from "react";
import { SubmitButton } from "./_components/SubmitButton";
import { Button } from "./_components/Button";
import { Dialog, DialogButtonWrapper } from "./_components/Dialog";
import { ExternalLink } from "./_components/ExternalLink";
import { CommentInput } from "./_components/CommentInput";

export const AddBookmark = ({ title, url, addBookmark } : { title: string, url: string, addBookmark: (formData: FormData) => Promise<void> }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        onClick={() => dialogRef.current?.showModal()}
      >
        Save
      </Button>
      <Dialog ref={dialogRef} title="Save to Bookmark">
        <ExternalLink href={url}>{title}</ExternalLink>
        <form action={addBookmark}>
          <CommentInput type="text" name="comment" label="Comment" autoFocus />
          <input type="hidden" name="url" value={url} />
          <input type="hidden" name="title" value={title} />
          <DialogButtonWrapper>
            <SubmitButton label="Save" pendingLabel="Sending..." />
          </DialogButtonWrapper>
        </form>
      </Dialog>
    </>
  )
}