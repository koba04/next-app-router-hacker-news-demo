'use client';

import { useTransition } from "react";
import { Button } from "../_components/Button";
import { remove } from './action';

export const RemoveBookmark = ({ id }: { id: number }) => {
  const [isPending, startTransition] = useTransition();
  return (
      <Button
        type="button"
        onClick={() => {
          startTransition(async () => {
            await remove(id);
          })
        }}
      >
        {isPending ? 'Sending...' : 'Delete'}
      </Button>
  )
}