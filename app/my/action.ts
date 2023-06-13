'use server';

import { revalidatePath } from 'next/cache';
import { removeBookmark } from '../repository';

export async function remove(id: number) {
  await removeBookmark(id);
  revalidatePath("/my");
}