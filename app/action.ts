"use server";

import { redirect } from "next/navigation";
import { addBookmark } from "./repository"

export async function add(formData: FormData) {
  const title = String(formData.get("title"));
  const url = String(formData.get("url"));
  const comment = String(formData.get("comment"));
  if (!title || !url) {
    throw new Error("Title and URL are required");
  }
  await addBookmark({ title, url, comment });
  redirect("/my");
}