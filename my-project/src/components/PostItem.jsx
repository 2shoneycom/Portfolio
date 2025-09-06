function PostItem() {
  return (
    <div className="relative w-40 h-40 mx-5 bg-cyan-800">
      <div className="absolute top-0 left-0 w-full h-1/4">
        <h1 className="absolute top-1 left-1 text-xl" >Post Title</h1>
      </div>
      <div className="m-5 w-30 h-30 bg-cyan-200">
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/4">
        <h1 className="absolute bottom-1 left-1 text-xl" >20xx.xx.xx</h1>
      </div>
    </div>
  );
}

export default PostItem;