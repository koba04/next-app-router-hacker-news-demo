'use client';

import { useRef, useActionState } from "react";
import { SubmitButton } from "./_components/SubmitButton";
import { Button } from "./_components/Button";
import { Dialog, DialogButtonWrapper } from "./_components/Dialog";
import { ExternalLink } from "./_components/ExternalLink";
import { CommentInput } from "./_components/CommentInput";
import { add } from "./action";

export const AddBookmark = ({ title, url } : { title: string, url: string }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [_, addAction] = useActionState((_: null, formData: FormData) => add(formData), null);
  return (
    <>
      <Button
        onClick={() => dialogRef.current?.showModal()}
      >
        Save
      </Button>
      <Dialog ref={dialogRef} title="Save to Bookmark">
        <ExternalLink href={url}>{title}</ExternalLink>
        <form action={add}>
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