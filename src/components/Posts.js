import Post from "./Post";

export default function Posts() {
  return (
    <div className="flex flex-col space-y-6">
      <Post />
      <Post />
    </div>
  );
}
