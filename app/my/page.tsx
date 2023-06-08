import { RemoveBookmark } from './RemoveBookmark';
import { getAllBookmark } from '../repository';
import { remove } from './action';

export default async function Home() {
  const bookmarks = await getAllBookmark();
  return (
    <main className="p-12">
      <ul className="flex flex-col gap-2">
        {bookmarks.map(({ id, title, url, comment }) => (
          <li className="flex justify-center" key={url}>
            <div className="p-2 text-xl border-violet-200 border-2 w-4/5 hover:drop-shadow-md">
              <div className="flex">
                <a href={url} target="_blank" className="flex-grow underline text-violet-500 hover:text-violet-400">{title}</a>
                <RemoveBookmark id={id} removeBookmark={remove} />
              </div>
              <p className="text-lg">{`"${comment}"`}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}