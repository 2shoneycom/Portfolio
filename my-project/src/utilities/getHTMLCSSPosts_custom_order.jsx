import matter from "gray-matter";

const modules = import.meta.glob("../posts/webs/html_css/*.md", { eager: true, as: "raw" });

function getHTMLCSSPosts_custom_order() {
  const posts = Object.entries(modules).map(([path, raw]) => {
    // raw is already the file content string
    const { data, content } = matter(raw);

    return {
      slug: path.split("/").pop().replace(".md", ""),
      ...data,
      content,
    };
  });

  // sort by custom order (increasing)
  return posts.sort((a, b) => a.customOrder - b.customOrder);
}

export default getHTMLCSSPosts_custom_order;