import { fetchHackerNews } from "./repository"
import { AddBookmark } from "./AddBookmark";
import { add } from "./action";

export default async function Home() {
  const news = await fetchHackerNews(50);
  return (
    <main className="p-12">
      <ul className="flex flex-col gap-4">
        {news.map(({ id, rank, title, url }) => (
          <li className="flex justify-center" key={url}>
            <div className="flex w-4/5">
              <span className="grow-0 w-16 px-4 text-2xl">{rank}</span>
              {url ?
                <a href={url} target="_blank" className="flex-grow text-xl underline text-violet-500 hover:text-violet-400">
                  {title}
                </a>
              : <span className="text-xl">{title}</span>
              }
              {url && <div className="inline-block text-sm px-4"><AddBookmark url={url} title={title} addBookmark={add} /></div>}
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
