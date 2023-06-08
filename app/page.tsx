import { fetchHackerNews } from "./repository"
import { AddBookmark } from "./AddBookmark";
import { add } from "./action";
import { Main } from "./_components/Main";
import { List, ListItem } from "./_components/List";

export default async function Home() {
  const news = await fetchHackerNews(50);
  return (
    <Main>
      <List>
        {news.map(({ id, rank, title, url }) => (
          <ListItem key={url}>
            <div className="flex w-4/5">
              <span className="grow-0 shrink-0 w-12 text-2xl self-center text-center">{rank}</span>
              {url ?
                <a href={url} target="_blank" className="flex-grow text-xl underline text-violet-500 hover:text-violet-400">
                  {title}
                </a>
              : <span className="text-xl">{title}</span>
              }
              {url && <div className="inline-block text-sm px-4 self-center"><AddBookmark url={url} title={title} addBookmark={add} /></div>}
            </div>
          </ListItem>
        ))}
      </List>
    </Main>
  )
}
