'use server';

import { revalidatePath } from 'next/cache';
import { removeBookmark } from './repository';

export async function handleRemove(id: number) {
  await removeBookmark(id);
  revalidatePath("/");
}