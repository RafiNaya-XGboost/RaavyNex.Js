import { getDetailPost } from "@/lib/api";

interface Pageprops {
  params: {
    id: number;
  };
}

async function Page({ params }: Pageprops) {
  const { id } = await params;
  const post = await getDetailPost(id);

  console.log(post);

 return (
  <div className="Post-Detail">
    <h1>{post.title}</h1>

    <div className="Content">
      <p>{post.body}</p>
    </div>
  </div>
);
}

export default Page;