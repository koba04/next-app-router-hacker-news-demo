import { List, ListItem } from "./_components/List";
import { Main } from "./_components/Main";
import { Loading } from "./_components/Loading";

export default function LoadingPage() {
  return (
    <Main>
      <List>
          <ListItem>
            <Loading />
          </ListItem>
      </List>
    </Main>
  )
}