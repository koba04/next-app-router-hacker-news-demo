import { fetchHackerNews } from "./repository"
import { AddBookmark } from "./AddBookmark";
import { Main } from "./_components/Main";
import { List, ListItem } from "./_components/List";
import { ExternalLink } from "./_components/ExternalLink";
import { HNStoryRow } from "./_components/HNStoryRow";

export default async function Home() {
  const news = await fetchHackerNews(50);
  return (
    <Main>
      <List>
        {news.map(({ id, rank, title, url }) => (
          <ListItem key={id}>
            <HNStoryRow
              rank={rank}
              title={url
                ? <ExternalLink href={url}>{title}</ExternalLink>
                : <span>{title}</span>
              }
              action={url && <AddBookmark url={url} title={title} />}
            />
          </ListItem>
        ))}
      </List>
    </Main>
  )
}
