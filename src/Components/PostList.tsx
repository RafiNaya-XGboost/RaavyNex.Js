import Link from "next/link";
import { Post } from "@/types/post";


interface PostListProps {
    posts: Post[]

}

function PostList({posts}: PostListProps) {


  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <p><strong>User ID:</strong> {post.userId}</p>
          <p><strong>ID:</strong> {post.id}</p>

          <h2>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h2>

          <p><strong>Body:</strong> {post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;