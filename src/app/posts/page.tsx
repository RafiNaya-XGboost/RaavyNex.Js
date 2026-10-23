import Image from "next/image";
import Link from "next/link";
import { getAllPost } from "@/lib/api";
import PostList from "@/Components/PostList";

export default async function Page() {
  const posts = await getAllPost();

  return (
    <>
      <div className="main-heading">
        <h2>Daftar Tulisan Raavy Company</h2>

        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum soluta
          accusantium sit aut incidunt officiis totam possimus quia. Nostrum, quo?
        </p>
      </div>

      <PostList posts={posts} />
    </>
  );
}