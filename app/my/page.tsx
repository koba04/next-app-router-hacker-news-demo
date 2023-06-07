import { revalidatePath } from 'next/cache';
import { DeleteButton } from '../DeleteButton';
import { getAllBookmark, removeBookmark } from '../repository';

export async function handleRemove(id: number) {
  'use server';
  await removeBookmark(id);
  revalidatePath("/");
}

export default async function Home() {
  const bookmarks = await getAllBookmark();
  return (
    <main className="p-12">
      <ul className="flex flex-col gap-4">
        {bookmarks.map(({ id, title, url, comment }) => (
          <li className="px-12 text-2xl" key={url}><a href={url} target="_blank" className="underline text-violet-500 hover:text-violet-400">{title}</a>
            ({comment})
            <DeleteButton id={id} handleRemove={handleRemove} />
          </li>
        ))}
      </ul>
    </main>
  )
}