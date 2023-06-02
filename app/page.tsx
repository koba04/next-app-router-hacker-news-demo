import { getAllBookmark, getComments } from './server/bookmark';

const getAllBookmarkAndComments = async () => {
  const bookmarks = await getAllBookmark();
  const commentsByBookmarkId = await getComments(bookmarks.map(({ id }) => id));
  return bookmarks.map((bookmark) => ({
    ...bookmark,
    comments: commentsByBookmarkId[bookmark.id] || [],
  }));
}

export default async function Home() {
  const bookmarks = await getAllBookmarkAndComments();
  return (
    <main className="p-12">
      <h1 className="text-5xl text-center p-12 pt-0">Next Bookmark</h1>
      <ul className="flex flex-col gap-4">
        {bookmarks.map(({ title, url, comments }) => (
          <li className="px-12 text-2xl" key={url}><a href={url} target="_blank" className="underline text-violet-500 hover:text-violet-400">{title}</a> ({comments.length}comments)</li>
        ))}
      </ul>
    </main>
  )
}
