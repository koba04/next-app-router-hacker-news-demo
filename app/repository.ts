import sqlite3 from "sqlite3";
import { open } from "sqlite";

const sleep = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

type Bookmark = {
  id: number;
  title: string;
  url: string;
  comment: string;
}

const openDB = async () => {
  // add sleep to simulate slow database connection
  await sleep(500)
  return open({
    filename: './db/bookmark.db',
    driver: sqlite3.Database
  });
}

export const getAllBookmark = async (): Promise<Bookmark[]> => {
  const db = await openDB();
  const query = 'SELECT id, title, url, comment from bookmark ORDER BY id DESC';
  return db.all(query);
}

export const addBookmark = async (bookmark: Omit<Bookmark, 'id'>) => {
  const db = await openDB();
  const query = 'INSERT INTO bookmark (title, url, comment) VALUES (?, ?, ?)';
  const result = await db.run(query, [bookmark.title, bookmark.url, bookmark.comment]);
  return result.lastID;
}

export const removeBookmark = async (bookmarkId: number) => {
  const db = await openDB();
  const query = 'DELETE FROM bookmark where id = ?';
  return db.run(query, [bookmarkId]);
}

export type HNStory = {
  id: number;
  rank: number;
  title: string;
  url?: string;
}

export const fetchHackerNews = async (count: number): Promise<HNStory[]> => {
  const ids = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  ).then(res => res.json());
  const stories: any = await Promise.all(
    ids.slice(0, count).map(
      async (id: number, index: number): Promise<HNStory> => {
        const story: HNStory = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        ).then(res => res.json());
        story.rank = index + 1;
        return story;
      }
    )
  );
  // console.log(stories);
  return stories.sort((a: HNStory, b: HNStory) => a.rank - b.rank);
};
