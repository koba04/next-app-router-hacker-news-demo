'use client';

import { SubmitButton } from "../_components/SubmitButton";

export const RemoveBookmark = ({ id, removeBookmark }: { id: number, removeBookmark: (formData: FormData) => Promise<void> }) => {
  return (
    <form action={removeBookmark}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton label="Delete" pendingLabel="Sending..." />
    </form>
  )
}