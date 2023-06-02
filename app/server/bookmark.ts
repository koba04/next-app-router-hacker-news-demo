'use server';
import sqlite3 from "sqlite3";
import { open } from "sqlite";

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
  const query = `SELECT bookmark_id, comment from comment where bookmark_id in (${bookmarkIds.join(',')})`;
  const comments = await db.all(query);
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

