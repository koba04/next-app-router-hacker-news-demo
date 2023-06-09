import { RemoveBookmark } from './RemoveBookmark';
import { getAllBookmark } from '../repository';
import { remove } from './action';
import { Main } from '../_components/Main';
import { List, ListItem } from '../_components/List';
import { ExternalLink } from '../_components/ExternalLink';
import { BookmarkRow } from '../_components/BookmarkRow';

export default async function Home() {
  const bookmarks = await getAllBookmark();
  return (
    <Main>
      <List>
        {bookmarks.map(({ id, title, url, comment }) => (
          <ListItem key={url}>
            <BookmarkRow
              link={<ExternalLink href={url}>{title}</ExternalLink>}
              action={<RemoveBookmark id={id} removeBookmark={remove} />}
              comment={comment}
            />
          </ListItem>
        ))}
      </List>
    </Main>
  )
}