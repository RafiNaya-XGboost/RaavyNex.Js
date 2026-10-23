import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "@/lib/api";
import PostList from "@/Components/PostList";

export default async function Home() {
  const posts = await getLastPost();

  return (
    <>
      <div className="main-heading">
        <h1>Selamat Datang di Raavy Company</h1>

        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum soluta
          accusantium sit aut incidunt officiis totam possimus quia. Nostrum, quo?
        </p>
      </div>

      <PostList posts={posts} />
    </>
  );
}