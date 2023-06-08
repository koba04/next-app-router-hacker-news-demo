import { revalidatePath } from 'next/cache';
import { removeBookmark } from '../repository';

export async function remove(formData: FormData) {
  'use server';
  const id = Number(formData.get("id"));
  await removeBookmark(id);
  revalidatePath("/my");
}