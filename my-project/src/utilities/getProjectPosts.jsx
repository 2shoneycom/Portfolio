import matter from "gray-matter";

const modules = import.meta.glob("../posts/projects/*.md", { eager: true, as: "raw" });

function getProjectPosts() {
  const posts = Object.entries(modules).map(([path, raw]) => {
    // raw is already the file content string
    const { data, content } = matter(raw);

    return {
      slug: path.split("/").pop().replace(".md", ""),
      ...data,
      content,
    };
  });

  // sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default getProjectPosts;