'use server';
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
}

type Comment = {
  bookmark_id: number;
  comment: string;
}

const openDB = async () => {
  // add sleep to simulate slow database connection
  await sleep(500)
  return open({
    filename: './db/database.db',
    driver: sqlite3.Database
  });
}

export const getAllBookmark = async (): Promise<Bookmark[]> => {
  const db = await openDB();
  const query = 'SELECT id, title, url from bookmark';
  return db.all(query);
}

export const getComments = async (bookmarkIds: number[]) => {
  const db = await openDB();
  // use prepared statement to prevent SQL injection
  const query = `SELECT bookmark_id, comment from comment where bookmark_id in (${bookmarkIds.map(() => '?').join(',')})`;
  const comments = await db.all(query, bookmarkIds);
  const commentsByBookmarkId: { [key: number]: Comment[] } = {};
  comments.forEach((comment) => {
    if (commentsByBookmarkId[comment.bookmark_id]) {
      commentsByBookmarkId[comment.bookmark_id].push(comment);
    } else {
      commentsByBookmarkId[comment.bookmark_id] = [comment];
    }
  });
  return commentsByBookmarkId;
}

export const addBookmark = async (bookmark: Omit<Bookmark, 'id'>) => {
  const db = await openDB();
  const query = 'INSERT INTO bookmark (title, url) VALUES (?, ?)';
  const result = await db.run(query, [bookmark.title, bookmark.url]);
  return result.lastID;
}

export const removeBookmark = async (bookmarkId: number) => {
  const db = await openDB();
  const query = 'DELETE FROM bookmark where id = ?';
  return db.run(query, [bookmarkId]);
}