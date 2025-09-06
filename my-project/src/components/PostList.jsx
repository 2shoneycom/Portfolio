import PostItem from "./PostItem";

function PostList() {
  return (
    <article className="w-full h-70 my-10 flex flex-col bg-amber-300">
      <div className="relative w-full basis-15 bg-amber-400">
        <h1 className="absolute bottom-2 left-2 text-2xl font-bold">Latest Post</h1>
      </div>
      <div className="w-full basis-55 flex justify-start items-center overflow-scroll">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </article>
  );
}

export default PostList;