import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import axios from "axios";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  // sort posts by date in descending order
  const posts = slugs
    .map((slug) => {
      return getPostBySlug(slug, fields);
    })
    .sort((post1, post2) => {
      return post1.date > post2.date ? -1 : 1;
    });
  return posts;
}

export async function getBlogContents() {
  const url = "https://ys-note.microcms.io/api/v1/post";
  const response = await axios
    .get(url, {
      headers: { "X-API-KEY": process.env.API_KEY },
    })
    .catch((error) => {
      return error;
    });
  return JSON.parse(JSON.stringify(response))
}
