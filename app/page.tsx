// import { DeleteButton } from './DeleteButton';
// import { handleRemove } from './action';
// import { getAllBookmark, getComments } from './repository';

import { redirect } from "next/navigation";
import { addBookmark, fetchHackerNews } from "./repository"
import { AddBookmark } from "./AddBookmark";

/*
const getAllBookmarkAndComments = async () => {
  const bookmarks = await getAllBookmark();
  const commentsByBookmarkId = await getComments(bookmarks.map(({ id }) => id));
  return bookmarks.map((bookmark) => ({
    ...bookmark,
    comments: commentsByBookmarkId[bookmark.id] || [],
  }));
}
*/

async function add(formData: FormData) {
  "use server";
  const title = String(formData.get("title"));
  const url = String(formData.get("url"));
  const comment = String(formData.get("comment"));
  if (!title || !url) {
    throw new Error("Title and URL are required");
  }
  await addBookmark({ title, url, comment });
  redirect("/my");
}

export default async function Home() {
  const news = await fetchHackerNews(50);
  return (
    <main className="p-12">
      <ul className="flex flex-col gap-4">
        {news.map(({ id, rank, title, url }) => (
          <li className="px-12 text-2xl" key={url}>
            <span className="px-4">{rank}</span>
            {url ?
              <a href={url} target="_blank" className="text-xl underline text-violet-500 hover:text-violet-400">
                {title}
              </a>
            : <span className="text-xl">{title}</span>
            }
            {url && <div className="inline-block text-sm px-4"><AddBookmark url={url} title={title} addBookmark={add} /></div>}
          </li>
        ))}
      </ul>
    </main>
  )
}
