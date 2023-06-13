'use client';

import { useTransition } from "react";
import { Button } from "../_components/Button";

export const RemoveBookmark = ({ id, removeBookmark }: { id: number, removeBookmark: (id: number) => Promise<void> }) => {
  const [isPending, startTransition] = useTransition();
  return (
      <Button
        type="button"
        onClick={() => {
          startTransition(async () => {
            await removeBookmark(id);
          })
        }}
      >
        {isPending ? 'Sending...' : 'Delete'}
      </Button>
  )
}