import { addBookmark } from "../repository";
import { redirect } from 'next/navigation';

async function add(formData: FormData) {
  "use server";
  const title = String(formData.get("title"));
  const url = String(formData.get("url"));
  if (!title || !url) {
    throw new Error("Title and URL are required");
  }
  await addBookmark({ title, url });
  redirect("/");
}

export default function New() {
  return (
    <main className="p-12">
      <form action={add} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          <span className="text-xl">Title</span>
          <input type="text" name="title" className="border border-gray-300 rounded-md p-2" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xl">URL</span>
          <input type="text" name="url" className="border border-gray-300 rounded-md p-2" />
        </label>
        <button className="bg-violet-500 hover:bg-violet-400 text-white rounded-md p-2">Submit</button>
      </form>
    </main>
  )
}