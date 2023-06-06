import { revalidatePath } from 'next/cache';
import { DeleteButton } from './DeleteButton';
import { getAllBookmark, getComments, removeBookmark } from './repository';

const getAllBookmarkAndComments = async () => {
  const bookmarks = await getAllBookmark();
  const commentsByBookmarkId = await getComments(bookmarks.map(({ id }) => id));
  return bookmarks.map((bookmark) => ({
    ...bookmark,
    comments: commentsByBookmarkId[bookmark.id] || [],
  }));
}

export async function handleRemove(id: number) {
  'use server';
  await removeBookmark(id);
  revalidatePath("/");
}

export default async function Home() {
  const bookmarks = await getAllBookmarkAndComments();
  return (
    <main className="p-12">
      <ul className="flex flex-col gap-4">
        {bookmarks.map(({ id, title, url, comments }) => (
          <li className="px-12 text-2xl" key={url}><a href={url} target="_blank" className="underline text-violet-500 hover:text-violet-400">{title}</a>
            ({comments.length}comments)
            <DeleteButton id={id} handleRemove={handleRemove} />
          </li>
        ))}
      </ul>
    </main>
  )
}
